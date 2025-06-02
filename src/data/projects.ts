import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'healthcare-suite',
    title: 'Advanced Intelligent Healthcare Administration Suite',
    description: 'AI-driven healthcare management with facial recognition login, telemedicine, and smart chatbot. Built with Python/Flask/SQL, it handles patient records, appointments, and medication advice with real-time analytics. Includes emergency alerts, prescription scanning, and voice-enabled AI assistance.',
    image: 'https://images.pexels.com/photos/32315563/pexels-photo-32315563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Flask', 'SQL', 'AI', 'Healthcare'],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'OpenCV', 'TensorFlow', 'Twilio', 'HTML/CSS'],
    features: [
      'Facial recognition-based secure login',
      'Telemedicine appointment and video consults',
      'AI chatbot for medical Q&A and triage',
      'Emergency alert system',
      'Prescription OCR scanner',
      'Voice-enabled assistant'
    ],
    challenges: [
      'Integrating biometric authentication securely',
      'Real-time analytics of medical data',
      'Building multilingual, voice-enabled chatbot',
      'Implementing privacy-first data architecture'
    ],
    solutions: [
      'Used OpenCV and face-recognition for biometric login',
      'Integrated real-time analytics dashboard with Plotly',
      'Built AI chatbot using Rasa and NLP libraries',
      'Implemented secure patient data flows with encryption'
    ],
    githubUrl: 'https://github.com/iamnikhilh/Healthcare-Management-System',
    liveUrl: 'https://ai-healthcare-suite.netlify.app',
    date: 'Sept 2024 - Nov 2024',
    detailImages: [
      'https://images.pexels.com/photos/32333089/pexels-photo-32333089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/32333090/pexels-photo-32333090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 'signaverse',
    title: 'SignaVerse: Next-Gen AI for Real-Time Sign Language Video Interpretation',
    description: 'Leveraged computer vision and AI to develop real-time sign language interpretation. Enabled seamless video call communication between sign language users and non-signers. Trained deep learning models on diverse sign language datasets (ASL, BSL, etc.) and integrated with video conferencing platforms for automatic sign detection and text transcription.',
    image: 'https://images.pexels.com/photos/32315564/pexels-photo-32315564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'Computer Vision', 'Sign Language', 'Deep Learning'],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'WebRTC', 'MediaPipe', 'React'],
    features: [
      'Real-time video-based sign interpretation',
      'Cross-dataset support (ASL, BSL)',
      'Live captioning and transcription',
      'Integration with conferencing tools like Zoom and Meet'
    ],
    challenges: [
      'Handling varied sign language gestures across regions',
      'Ensuring low latency in real-time interpretation',
      'Training deep models on limited datasets'
    ],
    solutions: [
      'Used CNN-LSTM hybrid models with transfer learning',
      'Optimized frame-by-frame gesture recognition using MediaPipe',
      'Developed dataset augmentations for training variety'
    ],
    //githubUrl: 'https://github.com/yourusername/signaverse',
    // liveUrl: 'https://signaverse.netlify.app',
    date: 'April 2025 - Ongoing',
    detailImages: [
      //'https://images.pexels.com/photos/7620309/pexels-photo-7620309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 'cognitive-nutrition',
    title: 'Cognitive Health and Nutrition Management System Powered by AI',
    description: 'Built AI-driven cognitive health & nutrition platform. Integrated cognitive metrics & diet tracking (Java/Spring Boot). Developed ML models linking nutrition to brain performance (Python/TensorFlow). Deployed scalable system with React frontend & Docker microservices.',
    image: 'https://images.pexels.com/photos/32315565/pexels-photo-32315565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'Spring Boot', 'Nutrition', 'ML'],
    technologies: ['Java', 'Spring Boot', 'Python', 'TensorFlow', 'React', 'Docker', 'MongoDB'],
    features: [
      'Cognitive performance tracking',
      'Dietary analytics dashboard',
      'Machine learning-driven insights',
      'Personalized diet and wellness suggestions',
      'Microservices architecture with Docker'
    ],
    challenges: [
      'Correlating nutrition data with cognitive function',
      'Designing real-time performance feedback loop',
      'Ensuring accuracy in dietary data inputs'
    ],
    solutions: [
      'Trained custom models to map food intake to performance scores',
      'Built scalable microservices for data analysis',
      'Used MongoDB and Redis for efficient data access and caching'
    ],
    githubUrl: 'https://github.com/iamnikhilh/AiNutri',
    liveUrl: 'https://cognitive-nutrition.netlify.app',
    date: 'Feb 2025',
    detailImages: [
      //'https://images.pexels.com/photos/1101138/pexels-photo-1101138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 'realtime-tracking',
    title: 'Real-Time Tracking System for Delivery Platform',
    description: 'Developed a robust real-time tracking system for delivery operations using GPS and live map updates. Enabled dynamic driver tracking, delivery route optimization, and ETA prediction with backend alert notifications.',
    image: 'https://images.pexels.com/photos/32315562/pexels-photo-32315562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Real-Time', 'Delivery', 'Tracking', 'Maps'],
    technologies: ['JavaScript', 'Node.js', 'Socket.IO', 'MongoDB', 'Leaflet.js', 'Google Maps API'],
    features: [
      'Live GPS-based delivery tracking',
      'Route optimization and ETA calculation',
      'Customer and admin tracking dashboards',
      'Driver status updates and notifications'
    ],
    challenges: [
      'Ensuring real-time data sync with low latency',
      'Handling high-volume simultaneous connections',
      'Integrating mapping APIs with precision'
    ],
    solutions: [
      'Used WebSockets (Socket.IO) for real-time data flow',
      'Implemented clustering strategies for scalable connections',
      'Integrated Google Maps and Leaflet for reliable geolocation UI'
    ],
    githubUrl: 'https://github.com/iamnikhilh/Real-Time-Location-Tracker-for-Multivendor-Delivery-Platform',
    liveUrl: 'https://realtime-tracking-demo.netlify.app',
    date: 'May 2025',
    detailImages: [
      'https://images.pexels.com/photos/32331302/pexels-photo-32331302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/32331303/pexels-photo-32331303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/32331301/pexels-photo-32331301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/32331300/pexels-photo-32331300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
];
