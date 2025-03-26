import { MapPin, Mail, Linkedin, Github, BookOpen, Award, Languages } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8 pb-20 sm:p-20">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-6">Yurio Windiatmoko</h1>
        <div className="flex flex-wrap gap-4 text-gray-300 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Karanganyar, JT 57716</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:yuriowindiatmoko@gmail.com" className="hover:text-primary-500">yuriowindiatmoko@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            <a href="https://www.linkedin.com/in/yuriowindiatmoko-347142156" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            <a href="https://github.com/Yuriowindiatmoko2401" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">GitHub</a>
          </div>
        </div>
        <p className="text-xl text-gray-300 leading-8">
          Versatile and results-driven data engineer specializing in data architecture, ETL pipelines, and scalable data solutions. 
          Extensive experience in cloud-based data engineering (AWS, GCP, Azure), real-time processing (Apache Kafka, Spark), 
          and AI-driven analytics.
        </p>
      </div>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Associate Product Manager</h3>
            <p className="text-gray-400">eFishery, Bandung | 2023 - 2024</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Successfully launched 3 AI-powered products: Pond Detector, Any-OCR, Vibrio Counter</li>
              <li>• Developing ETL code for Data Wrangling Pond Deduplication, improving data accuracy</li>
              <li>• Implementing PostGIS to enhance Map Object in Pond Detector, optimizing geospatial analysis</li>
              <li>• Developing ETL code for Reverse Geocoding In-house to replace Google Maps API</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Lecturer (Short Semester Program)</h3>
            <p className="text-gray-400">UIN Sunan Kalijaga Yogyakarta | 2023</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Enhanced student proficiency in data-driven business strategies</li>
              <li>• Delivered lectures focusing on Data-AI and business applications</li>
              <li>• Taught courses on Data Visualization and Advanced Query Analysis</li>
              <li>• Guided students through real-world projects including Traffic Analysis and Fraud Detection</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Artificial Intelligence Engineer</h3>
            <p className="text-gray-400">eFishery, Bandung | 2022</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Developed Aquacapture, a satellite-based pond monitoring system, improving efficiency by 40%</li>
              <li>• Built a self-service OCR platform, automating 80% of manual entry tasks</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Engineer</h3>
            <p className="text-gray-400">eFishery, Bandung | 2021 - 2022</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Designed & optimized ETL pipelines for real-time aquaculture data processing</li>
              <li>• Built data lakes & warehouses using Google BigQuery, PostgreSQL Citus, S3 and GCS</li>
              <li>• Improved data ingestion from IoT devices & satellite imagery for pond detection</li>
              <li>• Automated data pipelines with Apache Airflow & dbt, reducing manual work by 60%</li>
              <li>• Integrated Kafka for real-time streaming to process high-frequency sensor data</li>
              <li>• Developed machine learning feature stores to improve AI-powered risk diagnostics</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Engineer</h3>
            <p className="text-gray-400">Emtrade, Surakarta | 2021</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Designed real-time data ingestion CDC and Batch using Kafdrop & Airflow</li>
              <li>• Created Python-based automation scripts for data validation & pipeline monitoring</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Engineer</h3>
            <p className="text-gray-400">PT. Sigma Cipta Caraka (Telkomsigma), Jakarta | 2021</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Developed ETL pipelines to process unstructured data</li>
              <li>• Built data warehouse solutions using PostgreSQL, Metabase & Redash</li>
              <li>• Optimized SQL queries & indexing strategies, improving performance by 50%</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Engineer</h3>
            <p className="text-gray-400">Warung Pintar, Greater Jakarta Area | 2019 - 2021</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Architected big data pipelines for customer & transaction analytics in retail tech</li>
              <li>• Implemented data lake solutions with Google Cloud Storage & BigQuery</li>
              <li>• Developed Big Data batch & real-time processing pipelines using Airflow, dbt, and Spark</li>
              <li>• Improved ETL job efficiency through PySpark optimizations</li>
              <li>• Integrated external APIs & web scraping pipelines for market intelligence</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Engineer</h3>
            <p className="text-gray-400">Kitabisa.com, Greater Jakarta Area | 2019</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Built ETL pipelines for donation transaction data</li>
              <li>• Designed data models & schemas for scalable storage & retrieval</li>
              <li>• Optimized Python-based data processing jobs, reducing processing time by 40%</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Scientist</h3>
            <p className="text-gray-400">AiSensum, Jabodetabek | 2018</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Big Data & Data Scientist Consultant using Spark and Sparklyr</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Data Scientist</h3>
            <p className="text-gray-400">PT eBdesk Teknologi, Jabodetabek | 2017 - 2018</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Implemented NLP pipelines for social media analytics</li>
              <li>• Built big data infrastructure for social network analysis using Hadoop & Spark</li>
              <li>• Developed automated data pipelines for sentiment analysis dashboards</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold">Topografi Planner</h3>
            <p className="text-gray-400">PT. BANGUN NUSANTARA ENGINEERING, Bandung dan Sekitarnya, Jawa Barat | 2014 - 2017</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Led topographical planning and engineering projects</li>
              <li>• Coordinated with engineering teams for project implementation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Education
        </h2>
        <div className="space-y-8">
          <div className="border-l-2 border-primary-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-bold">Ph.D.: Informatics</h3>
              <p className="text-gray-400">2025-03 - 2028-03</p>
            </div>
            <p className="text-gray-400 mt-1">Universitas Amikom - Yogya, Indonesia</p>
            <p className="text-gray-300 mt-2">ON GOING - With Dissertation Title:</p>
            <p className="text-gray-300">Generative Model for High Resolution Landslide Susceptibility Maps in Indonesia</p>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-bold">Master of Computer Applications - MCA: data scientist</h3>
              <p className="text-gray-400">2019-01 - 2022-01</p>
            </div>
            <p className="text-gray-400 mt-1">Universitas Islam Indonesia - Yogyakarta, YO</p>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-bold">No Degree: Business Administration</h3>
              <p className="text-gray-400">2023-09 - 2023-10</p>
            </div>
            <p className="text-gray-400 mt-1"> Mini-MBA Certification - Bandung</p>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-bold">Gelar Sarjana: Matematika</h3>
              <p className="text-gray-400">2009-01 - 2013-01</p>
            </div>
            <p className="text-gray-400 mt-1">Universitas Padjadjaran (Unpad) - Bandung, JB</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Award className="w-8 h-8" />
          Certifications
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 border-primary-600 pl-6">
            <ul className="space-y-3 text-gray-300">
              <li>• Developer Generative AI - Alibaba Cloud</li>
              <li>• Fullstack Webdev Bootcamp</li>
              <li>• Product Management - Real World Simulation</li>
              <li>• Mini MBA</li>
              <li>• Data Science on the Google Cloud Platform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Languages className="w-8 h-8" />
          Languages
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 border-primary-600 pl-6">
            <ul className="space-y-3 text-gray-300">
              <li>• Indonesia</li>
              <li>• Inggris</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Publications</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold mb-4">Publication</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Mi-Botway: a Deep Learning-based Intelligent University Enquiries Chatbot</li>
              <li>• Optimizing Planning Service Territories by Dividing Into Compact Several Sub-areas Using Binary Kmeans Clustering According Vehicle Constraints</li>
              <li>• Image Captioning with Attention for Smart Local Tourism using EfficientNet</li>
              <li>• Boarding House Renting Price Prediction Using Deep Neural Network Regression on Mobile Apps</li>
              <li>• Set Best Threshold in Vehicle Routing Problem for Better Utilization</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary-600 pl-6">
            <h3 className="text-xl font-bold mb-4">Key Projects & Intellectual Property (HAKI)</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• <span className="font-semibold">Aquacapture:</span> Developed algorithms for satellite imagery to monitor aquaculture activities.</li>
              <li>• <span className="font-semibold">Self Service OCR platform:</span> Intuitive Solution designed to empower business and individual to efficiently accurately perform OCR tasks.</li>
              <li>• <span className="font-semibold">Sistem Konsultasi Berbasis Kecerdasan Buatan dan Model Bahasa Besar untuk Budidaya Ikan dan Udang Terintegrasi dengan IoT</span>
                <br />Application ID: 300202407549</li>
              <li>• <span className="font-semibold">Sistem Deteksi dan Analisis Kolam Ikan dan Udang Menggunakan Citra Satelit</span>
                <br />Application ID: 300202407561</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Programming & ETL: Python (Pandas, PySpark, FastAPI), SQL, dbt</li>
              <li>• Big Data Processing: Apache Spark, Kafka, Airflow</li>
              <li>• Data Warehousing: Google BigQuery, Snowflake, AWS Redshift</li>
              <li>• Cloud Platforms: AWS, GCP, Azure</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Generative AI Tools</li>
              <li>• Front-End Development</li>
              <li>• Product Management & Roadmap Creation</li>
              <li>• Design Thinking & Analytical Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;