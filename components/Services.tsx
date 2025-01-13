
const services = [
    {
      id: "01",
      title: "Bodybuilding ",
      description:
        "Dedicated to building strength, endurance, and muscle through personalized training programs and disciplined nutrition.",
    },
    {
      id: "02",
      title: "Online Training",
      description: "Providing personalized online training programs designed to help clients achieve their fitness goals anytime, anywhere."
    },
    
    {
      id: "03",
      title: "Personal Training",
      description: "Offering customized, one-on-one fitness coaching to help clients achieve their unique health and fitness goals."
    },
    
    {
      id: "04",
      title: "Scheduled Workout Plan",
      description: "Designing and structuring personalized workout plans to ensure consistent progress and achievement of fitness goals."
    },
    {
      id: "05",
      title: "Supplement Guidance",
      description: "Providing expert advice on supplements to support training goals, enhance performance, and ensure optimal health."
    },
    {
      id: "06",
      title: "Diet Plan",
      description: "Creating balanced and nutritious diet plans tailored to individual needs for optimal health, muscle gain, or weight loss."
    },
    
  ];
export const Services = () => {
   

  return (
    <section className="text-white py-20" id="services">
        <div className="conatiner mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
            </div>
            <div className="md:w-3/4">
                {services.map(service => (
                    <div key={service.id} className="mb-16 flex items-start">
                        <div className="text-purple-300 font-bold text-5xl mr-6">
                            {service.id}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
};




