function Services () {
    const services = [
        { title:"Childcare",
          description: ""
        },
        { title: "Housekeeping",
          description: ""
        },
        { title:"Senior Care",
          description:""
        },
        { title:"Personal Assistence",
          description:""
        },
        { title: "Home Maintenance",
        description: "" 
        },
];
    return (
        <>
        {services.map((service) => (
            <div key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            </div>
        ))
        }
        </>
    );
}
export default Services;