export const blogPosts = [
  {
    title: "Smart Refrigerator (SSIP Ideation Competition)",
    excerpt:
      "How we conceptualized an IoT-enabled fridge with autonomous movement, voice commands, and smart usage alerts.",
    slug: "smart-refrigerator-ssip-ideation-competition",
    color: "bg-pastelPurple/40",

    content: `
      In current scenario, we only have simple fridges and smart fridges like displaying screen like mobile phones.
      These kind of fridges are not capable of moving and come to us.

      All such fridges are just capable of just cooling the food items, freezing ice, display applications etc. So, we have thought of an idea of smart refrigerator which is capable of moving on its own, detecting the items present inside it, giving voice commands to the user and alerting the user about the expiry of food items.
      By adding a liitle upgradation, we could call the refrigerator to us using a chip and a button.

      Also, by using voice detection like we have in our phones, we can command the fridge to open/ shut the doors. By adding a small database in it, we can enter our regular food items, and when the items are about to get over, we would get a notification on the sreen. For such thing to be possible the fridge maybe should be of an approriate size and might work on batteries.

      This fridge would be very useful for elderly people and differently-abled people. It would also help in reducing food wastage by alerting the user about expiry of food items.
    `,
  },

  {
    title: "AquaAI: Data Center Cooling Optimization",
    excerpt:
      " Exploring Transformer-GRU predictive models for water optimization in cooling data centers.",
    slug: "my-data-science-journey",
    color: "bg-pastelPink/40",

    content: `
      In my data science journey, I developed AquaAI, a model to optimize water usage in data center cooling systems. Using a Transformer-GRU architecture, AquaAI predicts cooling demands based on historical data, weather patterns, and server loads. By accurately forecasting cooling needs, AquaAI enables data centers to adjust water flow dynamically, reducing waste and improving efficiency. This project highlighted the power of advanced machine learning techniques in solving real-world sustainability challenges.
      Data centers are fundamental components of the worldwide digital economy; however, their sudden expansion lays considerable environmental challenges, especially regarding water consumption. Cooling systems, essential to maintain optimal operating temperatures for servers, consume vast amounts of water—both directly, in processes like evaporative cooling and humidification, and indirectly, through electricity generation that itself requires water. As global data transmission and computational demands continue to increase, enhancing water efficiency in data centers becomes essential not merely for reducing operational expenses, but also as a vital measure for environmental preservation and resource management. This issue is highlighted since there are several water scarced areas where large-scale industries conusme a lot of water.

A study explored this challenge from both operational and systematic perspectives. Ma et al.(2025) focuses on real-time operational optimizations using a hybrid Transformer GRU deep learning moder to predict coolent return temperatures in liquid cooling systems. It uses high frequency, facilty-level data, which achieves high predictive accuracy and demonstrates possibilities to reduce water consumption via intelligent control. On the other hand, Lei et al. (2025) uses a different approach by developing a workload-level water metric that integrates directly and indirectly to water use. Their decomposition analysis uncovers eight critical factors influencing the variability of water use—such as server efficiency, grid water factor, and cooling technology—highlighting instances where water usage can differ by as much as 10,000 times across different facilities.

Based on today’s readings, 2 key points are highlighted. Firstly, as demonstrated by Ma et al., predictive AI control can give immediate operational savings but it’s impact is limited by the parameters taken into consideration. Secondly, Lei et al. provides a strategic foundation for mechanisms for rea-time implementation. Combining both of the methodologies, stretegic and determinant analysis with operational AI optimization- portrays a convincing route for holistic, scalable water efficiency solutions in the data center sector.
    
`,
  },

  {
    title: "AMC Smart Civic Management",
    excerpt:
      "Building an AI-driven platform to streamline civic services and enhance urban governance.",
    slug: "importance-of-aesthetic-ui",
    color: "bg-icyCyan/40",

    content: `
      This project aims to design and implement an integrated civic management system that leverages Artificial Intelligence (AI), Machine Learning (ML), IoT, and Cloud technologies to automate AMC’s core functions. The proposed system will transform how services such as waste management, water supply, urban safety, construction monitoring, and grievance redressal are handled—merging them into a single intelligent platform.

The system includes:

- A centralized admin dashboard for AMC officials
- A mobile/web app for citizen interaction
- AI/ML models for forecasting, real-time alerts, anomaly detection
- Edge AI & IoT sensors for decentralized monitoring and automation
- NLP-powered Chatbot for 24x7 smart civic assistance
- Optional blockchain integration for transparent payments and audits
Waterlogging is a recurrent problem in Ahmedabad, especially during the monsoon season. With rapid urbanization and delayed infrastructure updates, the number of vulnerable zones has increased sharply in recent years. As of June 2025, AMC has identified more than 150 such areas. This document consolidates hotspot locations, contributing factors, and planned mitigation steps.
Waterlogging in Ahmedabad remains a pressing issue. Identifying and documenting prone zones, alongside timely intervention and citizen awareness, is key to mitigating annual monsoon disruption.
 It has been prepared using data from official reports, real-time congestion trackers (TomTom, CEIC, TrafficIndex.org), and research on regional mobility trends. The dataset can support urban planning, traffic modeling, and smart city dashboards.
 This dataset provides foundational intelligence on Ahmedabad’s traffic problem zones and can be a valuable resource for transportation decision-making, civic response, and future city planning.
 The findings are based on publicly available app ratings, user feedback, and observed feature sets.
    `,
  },
];
