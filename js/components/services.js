const services = [
    {
        name: "VIaChat",
        description: "A powerful WhatsApp API tech provider that enables businesses to integrate WhatsApp messaging into their applications.",
        features: [
            "Seamless integration with existing applications",
            "Automated messaging capabilities",
            "Rich media support including images, videos, and documents",
            "Analytics and reporting tools",
            "Multi-language support"
        ],
        link: "services/viachat.html"
    },
    {
        name: "Brainet",
        description: "Reliable internet service provider offering high-speed internet solutions for homes and businesses.",
        features: [
            "High-speed internet with low latency",
            "Flexible plans to suit different needs",
            "24/7 customer support",
            "No data caps",
            "Secure and stable connection"
        ],
        link: "services/brainet.html"
    },
    {
        name: "Networking Services",
        description: "Comprehensive networking solutions to enhance connectivity and collaboration.",
        features: [
            "Network design and implementation",
            "Managed network services",
            "Security solutions including firewalls and VPNs",
            "Cloud networking options",
            "Expert consultation and support"
        ],
        link: "services/networking.html"
    }
];

function displayServices() {
    const servicesContainer = document.getElementById('services-container');
    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');

        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.name;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        const serviceFeatures = document.createElement('ul');
        service.features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.textContent = feature;
            serviceFeatures.appendChild(featureItem);
        });

        const serviceLink = document.createElement('a');
        serviceLink.href = service.link;
        serviceLink.textContent = "Learn more";

        serviceElement.appendChild(serviceTitle);
        serviceElement.appendChild(serviceDescription);
        serviceElement.appendChild(serviceFeatures);
        serviceElement.appendChild(serviceLink);

        servicesContainer.appendChild(serviceElement);
    });
}

document.addEventListener('DOMContentLoaded', displayServices);