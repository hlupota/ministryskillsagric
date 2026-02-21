<?php
class DataHelper {
    public static function getLocations() {
        return [
            "Harare" => ["Harare Urban", "Harare Rural", "Chitungwiza", "Epworth"],
            "Bulawayo" => ["Bulawayo Urban", "Bulawayo Rural"],
            "Manicaland" => ["Buhera", "Chimanimani", "Chipinge", "Makoni", "Mutare", "Mutasa", "Nyanga"],
            "Mashonaland Central" => ["Bindura", "Guruve", "Mazowe", "Mbire", "Mount Darwin", "Muzarabani", "Rushinga", "Shamva"],
            "Mashonaland East" => ["Chikomba", "Goromonzi", "Hwedza", "Marondera", "Mudzi", "Murehwa", "Mutoko", "Seke", "Uzumba-Maramba-Pfungwe"],
            "Mashonaland West" => ["Chegutu", "Hurungwe", "Kariba", "Makonde", "Mhondoro-Ngezi", "Sanyati", "Zvimba"],
            "Masvingo" => ["Bikita", "Chiredzi", "Chivi", "Gutu", "Masvingo", "Mwenezi", "Zaka"],
            "Matabeleland North" => ["Binga", "Bubi", "Hwange", "Lupane", "Nkayi", "Tsholotsho", "Umguza"],
            "Matabeleland South" => ["Beitbridge", "Bulilima", "Gwanda", "Insiza", "Mangwe", "Matobo", "Umzingwane"],
            "Midlands" => ["Chirumhanzu", "Gokwe North", "Gokwe South", "Gweru", "Kwekwe", "Mberengwa", "Shurugwi", "Zvishavane"],
            "Head Office" => ["Head Office"]
        ];
    }

    public static function getDepartments() {
        return [
            "Agricultural Education (Colleges)" => [
                "Director", "Deputy Director",
                "Principal", "Vice Principal", "Educational Officer", "Lecturer",
                "Farm Manager", "Agricultural Assistant", "Laboratory Technician", "Warden",
                "Security Officer", "Cook", "Laundry Hand"
            ],
            "Crop Development and Protection" => [
                "Chief Director", "Director", "Deputy Director", "Agronomist", 
                "Plant Protection Officer", "Seed Certification Officer", "Soil Scientist", "Agricultural Engineer", 
                "Agribusiness & Marketing Specialist", "Horticulture Specialist", "Weed Scientist", "Plant Pathologist", 
                "Seed Specialist and or Analyst", "Botanist", "Entomologist", "Biosecurity Officer", 
                "Agricultural Extension Officer", "Agro-Input Dealer", "Executive Assistant"
            ],
            "Fisheries and Aquaculture Resources" => [
                "Chief Director", "Director", "Deputy Director", "Fisheries Officer", 
                "Aquaculture Development Specialist", "Fisheries Research Officer", "Executive Assistant"
            ],
            "Agricultural Research, Innovation and Development" => [
                "Chief Director", "Director", "Deputy Director",
                "Farmer Training Coordinator", "Advisory Services Specialist", "Executive Assistant"
            ],
            "Research Services" => [
                "Chief Director", "Director", "Deputy Director", "Research Officer", 
                "Laboratory Services Manager", "Biotechnology Specialist", "Executive Assistant"
            ],
            "Crops Research" => [
                "Director", "Deputy Director", "Research Officer", "Laboratory Technologist", "Executive Assistant"
            ],
            "Livestock Research" => [
                "Director", "Deputy Director", "Research Officer", "Animal Nutrition Specialist", "Laboratory Technologist", "Executive Assistant"
            ],
            "Livestock Production and Development" => [
                "Chief Director", "Director", "Deputy Director", 
                "Principal Livestock Officer", "Animal Nutrition Specialist", "Breeding and Genetics Officer", 
                "Livestock Specialist", "Animal Health Inspector", "Laboratory Technologist", "Glossinologist", 
                "Tsetse Field Officer", "Dip Tank Attendant", "Meat Grader / Inspector", "Executive Assistant"
            ],
            "Veterinary Services" => [
                "Chief Director", "Director", "Deputy Director", 
                "Veterinary Extension Supervisor", "Veterinary Extension Officer", "Epidemiologist", 
                "Veterinary Laboratory Manager", "Executive Assistant"
            ],
            "Veterinary Field Services" => [
                "Director", "Deputy Director", "Veterinary Extension Supervisor", "Veterinary Extension Officer", "Executive Assistant"
            ],
            "Veterinary Technical Services" => [
                "Director", "Deputy Director", "Epidemiologist", "Veterinary Laboratory Manager", "Executive Assistant"
            ],
            "Tsetse Control" => [
                "Director", "Deputy Director", "Tsetse Field Officer", "Glossinologist", "Executive Assistant"
            ],
            "Agricultural Engineering, Mechanisation & Soil Conservation" => [
                "Chief Director", "Director", "Deputy Director", 
                "Principal Agricultural Engineer", "Agricultural Engineer", "Irrigation Development Officer", 
                "Mechanisation Specialist", "Executive Assistant"
            ],
            "Water Resources Development and Management & WASH" => [
                "Chief Director", "Director", "Deputy Director", "Water Engineer", 
                "Hydrologist", "Dam Safety Officer", "Irrigation Engineer", "Water Quality Specialist", 
                "Water Resource Planner", "Sanitation Engineer", "Executive Assistant"
            ],
            "Irrigation Development" => [
                "Director", "Deputy Director", "Irrigation Engineer", "Water Resource Planner", "Executive Assistant"
            ],
            "Economics & Rural Development" => [
                "Chief Director", "Director", "Deputy Director", "Rural Development Officer", "Agricultural Extension Officer", "Agricultural Economist", 
                "Rural Development Planner", "Microfinance Specialist", "Climate Specialist", "Policy Analyst", 
                "Business Development Officer", "Markets and or Trades Officer", "Projects or Programmes Officer", 
                "Knowledge Management Officer", "Training Officer", "Executive Assistant"
            ],
            "Business Development and Marketing Team" => [
                "Chief Director", "Director", "Deputy Director", 
                "Business Development Officer", "Marketing Officer", "Value Chain Specialist", "Executive Assistant"
            ],
            "Land Management & Administration Department" => [
                "Chief Director", "Director", "Deputy Director", "Land Use Planner", 
                "GIS and Mapping Specialist", "Environmental Compliance Officer", "Resettlement Officer", "Lands Officer", 
                "Field Technician", "Land Surveyor", "Environmental Specialist", "Estate Management and or Valuation Officer", 
                "Executive Assistant"
            ],
            "Surveyor General" => [
                "Chief Director", "Surveyor General", "Deputy Surveyor General", "Principal Land Surveyor", "Land Surveyor", 
                "Cartographer", "GIS Specialist", "Executive Assistant"
            ],
            "Office of the Permanent Secretary" => ["Permanent Secretary", "Executive Assistant", "Executive Secretary", "Protocol Officer", "Driver"],
            "Human Resources Management Directorate" => ["Director", "Deputy Director", "Human Resources Officer", "Executive Assistant", "Executive Secretary"],
            "Finance and Administration" => [
                "Director", "Deputy Director", "Chief Accountant", "Accountant", 
                "Driver", "Office Orderly", "Security Officer", "Cook", "Laundry Hand", "Executive Assistant", "Executive Secretary"
            ],
            "Strategic Policy Planning and Monitoring and Evaluation (SPP&M&E)" => ["Director", "Deputy Director", "Deputy Director", "Strategic Planning Officer", "Monitoring and Evaluation Officer", "Executive Assistant"],
            "Gender Mainstreaming and Wellness" => ["Director", "Deputy Director", "Officer - Gender Mainstreaming and Wellness", "Executive Assistant"],
            "Communications and Advocacy" => ["Director", "Deputy Director", "Officer - Communications and Advocacy", "Executive Assistant"],
            "Internal Audit" => ["Chief Internal Auditor", "Internal Auditor", "Executive Assistant"],
            "Legal Services Department" => ["Chief Legal Adviser", "Legal Officer", "Litigation Officer", "Legislative Drafting Officer", "Executive Assistant"],
            "Information Communication Technology Department" => ["Director", "Deputy Director", "Systems Analyst", "Systems Administrator", "Network Security Officer", "ICT Support Manager", "Executive Assistant"],
            "Procurement Management Unit" => ["Director", "Deputy Director", "Principal Procurement Officer", "Senior Procurement Officer", "Contracts Management Specialist", "Executive Assistant"]
        ];
    }

    public static function getClusters() {
        return [
            "Extension & Advisory Services" => ["Crop Development and Protection", "Fisheries and Aquaculture Resources"],
            "Research, Innovation & Education" => ["Research Services", "Agricultural Education (Colleges)", "Agricultural Research, Innovation and Development", "Crops Research", "Livestock Research"],
            "Veterinary & Animal Health Services" => ["Livestock Production and Development", "Veterinary Services", "Veterinary Field Services", "Veterinary Technical Services", "Tsetse Control"],
            "Engineering, Infrastructure & Technical Services" => ["Agricultural Engineering, Mechanisation & Soil Conservation", "Water Resources Development and Management & WASH", "Irrigation Development"],
            "Business Development, Markets & Value Chains" => ["Economics & Rural Development", "Business Development and Marketing Team"],
            "Land Administration, Planning & Mapping" => ["Land Management & Administration Department", "Surveyor General"],
            "Corporate, Governance & Support Services" => [
                "Office of the Permanent Secretary", "Human Resources Management Directorate", "Finance and Administration", 
                "Strategic Policy Planning and Monitoring and Evaluation (SPP&M&E)", "Gender Mainstreaming and Wellness", 
                "Communications and Advocacy", "Internal Audit", "Legal Services Department", 
                "Information Communication Technology Department", "Procurement Management Unit"
            ]
        ];
    }

    public static function getSkillLabels() {
        return [
            "general" => [
                ["val" => 1, "label" => "Do not have these skills"],
                ["val" => 2, "label" => "Somewhat familiar"],
                ["val" => 3, "label" => "Basic level"],
                ["val" => 4, "label" => "Intermediate level"],
                ["val" => 5, "label" => "Advanced level"]
            ],
            "executive" => [
                ["val" => 1, "label" => "Awareness"],
                ["val" => 2, "label" => "Basic"],
                ["val" => 3, "label" => "Competent"],
                ["val" => 4, "label" => "Advanced"],
                ["val" => 5, "label" => "Strategic"]
            ]
        ];
    }
    
    // Placeholder for getting all technical skills - returning empty structure for now as it will be large
    // The view will likely contain the JSON directly or fetch it via AJAX if it's too big
    // But for "copying" Next.js structure, we can put it here or directly in the view.
    public static function getAllTechnicalSkills() {
        // Return an empty array here, and we will define the large JSON object directly in the view 
        // to avoid making this PHP file too large and complex to manage with simple tools.
        return [];
    }
}
