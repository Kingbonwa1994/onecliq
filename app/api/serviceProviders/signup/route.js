import {connect} from "@/dbConfig/dbConfig"
import ServiceProvider from "@/models/serviceProviderModel"
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import Service from "@/models/serviceModel";

connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email, phone, password, services} = reqBody
    
        //if exist
        const existingServiceProvider = await ServiceProvider.findOne({ email });

        if (existingServiceProvider) {
          return NextResponse.json(
            { error: "User already exists" },
            { status: 400 }
          );
          }

          if (services.length > 3) {
            return NextResponse.json(
              { error: "You can select a maximum of three services" },
              { status: 400 }
            );
          }
        //hashing password
        const salt = await bcryptjs.getSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //create a new serviceProvider
        const newServiceProvider = new ServiceProvider({
            email,
            phone,
            password: hashedPassword,
            services: [],
        })

        for (const serviceName of services) {
          // Check if the service already exists in the database
          const existingService = await Service.findOne({ name: serviceName });
    
          if (!existingService) {
            // If the service doesn't exist, create a new Service document
            const newService = new Service({ name: serviceName });
            await newService.save();
            
            // Associate the new Service with the ServiceProvider
            newServiceProvider.services.push(newService);
          } else {
            // If the service already exists, associate it with the ServiceProvider
            newServiceProvider.services.push(existingService);
          }
        }
    
        const savedServiceProvider = await newServiceProvider.save();
    
        return NextResponse.json({
          message: "ServiceProvider created successfully",
          success: true,
          savedServiceProvider,
        });
      } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }