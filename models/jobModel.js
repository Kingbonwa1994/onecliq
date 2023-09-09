const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    // Add other fields as needed
  });
  
  const Job = mongoose.model('Job', jobSchema);
  
  module.exports = Job;