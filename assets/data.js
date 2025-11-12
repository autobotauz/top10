// Configuration and data for Top10 site
// Update associateTag to your Amazon Associates tag (override with URL ?tag=yourtag-20)
window.TOP10_CONFIG = {
  siteName: "Item Rank",
  associateTag: "10ec1c-20", // Global default tag
  marketplace: "US", // Used for link building; default domain amazon.com
  tracking: {
    enableAscSubtag: true, // if true, script will append ascsubtag for granular tracking
    ascSubtagPrefix: 'itemrank' // prefix used before category/position/item slug
  }
};

// Categories and items
// Each item supports either asin or url (prefer asin when possible)
// Minimal fields: title, asin|url, note(optional), img(optional)
window.TOP10_DATA = {
  categories: [
    {
      id: "coffee-cups",
      name: "Coffee Cups",
      description: "Our favorite mugs for home, office, and travel.",
      items: [
        { title: "Insulated Stainless Steel Travel Mug", asin: "B07PK5T5QX", note: "Spill-resistant, keeps drinks hot for hours.", badge: "Best Overall" },
        { title: "Ceramic Coffee Mug (14oz)", url: "https://www.amazon.com/s?k=ceramic+coffee+mug+14oz", note: "Classic design, microwave safe." },
        { title: "Double-Wall Glass Mug", url: "https://www.amazon.com/s?k=double+wall+glass+mug", note: "Great heat retention and looks sharp." },
        { title: "Camping Enamel Mug", url: "https://www.amazon.com/s?k=enamel+camping+mug", badge: "Durable" },
        { title: "Large Bistro Mug (18oz)", url: "https://www.amazon.com/s?k=large+bistro+mug+18oz" },
        { title: "Stackable Porcelain Mugs Set", url: "https://www.amazon.com/s?k=stackable+porcelain+mugs+set" },
        { title: "Stoneware Mug", url: "https://www.amazon.com/s?k=stoneware+mug" },
        { title: "Insulated Tumbler with Lid", url: "https://www.amazon.com/s?k=insulated+tumbler+with+lid" },
        { title: "Funny Coffee Mug Gift", url: "https://www.amazon.com/s?k=funny+coffee+mug", badge: "Gift Pick" },
        { title: "Travel Mug with Handle", url: "https://www.amazon.com/s?k=travel+mug+with+handle" }
      ]
    },
    {
      id: "water-bottles",
      name: "Water Bottles",
      description: "Reusable bottles to stay hydrated anywhere.",
      items: [
        { title: "Insulated Stainless Steel Bottle", url: "https://www.amazon.com/s?k=insulated+stainless+steel+water+bottle" },
        { title: "Wide Mouth Hydration Bottle", url: "https://www.amazon.com/s?k=wide+mouth+water+bottle" },
        { title: "Slim Travel Bottle", url: "https://www.amazon.com/s?k=slim+water+bottle" },
        { title: "Kids Water Bottle", url: "https://www.amazon.com/s?k=kids+water+bottle" },
        { title: "Glass Water Bottle", url: "https://www.amazon.com/s?k=glass+water+bottle" },
        { title: "Collapsible Water Bottle", url: "https://www.amazon.com/s?k=collapsible+water+bottle" },
        { title: "Filtered Water Bottle", url: "https://www.amazon.com/s?k=filtered+water+bottle" },
        { title: "Large 64oz Bottle", url: "https://www.amazon.com/s?k=64oz+water+bottle" },
        { title: "Sports Squeeze Bottle", url: "https://www.amazon.com/s?k=sports+water+bottle" },
        { title: "Trail Hiking Bottle", url: "https://www.amazon.com/s?k=hiking+water+bottle" }
      ]
    },
    {
      id: "headphones",
      name: "Headphones",
      description: "Popular picks for music, calls, and focus.",
      items: [
        { title: "Wireless Over-Ear ANC", url: "https://www.amazon.com/s?k=wireless+anc+headphones", badge: "Best Overall" },
        { title: "Bluetooth On-Ear", url: "https://www.amazon.com/s?k=bluetooth+on+ear+headphones" },
        { title: "Gaming Headset", url: "https://www.amazon.com/s?k=gaming+headset", badge: "For Gaming" },
        { title: "Wireless Earbuds", url: "https://www.amazon.com/s?k=wireless+earbuds" },
        { title: "Noise-Isolating Earbuds", url: "https://www.amazon.com/s?k=noise+isolating+earbuds" },
        { title: "Open-Ear Headphones", url: "https://www.amazon.com/s?k=open+ear+headphones" },
        { title: "Studio Monitor Headphones", url: "https://www.amazon.com/s?k=studio+monitor+headphones", badge: "For Mixing" },
        { title: "Workout Sweatproof Earbuds", url: "https://www.amazon.com/s?k=workout+earbuds" },
        { title: "Travel Folding Headphones", url: "https://www.amazon.com/s?k=folding+headphones" },
        { title: "Budget Wired Headphones", url: "https://www.amazon.com/s?k=wired+headphones", badge: "Best Budget" }
      ]
    },
    {
      id: "smartwatches",
      name: "Smartwatches",
      description: "Track health, workouts, and notifications.",
      items: [
        { title: "Fitness Focused Smartwatch", url: "https://www.amazon.com/s?k=fitness+smartwatch" },
        { title: "AMOLED Display Watch", url: "https://www.amazon.com/s?k=amoled+smartwatch" },
        { title: "Sleep Tracking Watch", url: "https://www.amazon.com/s?k=sleep+tracking+watch" },
        { title: "Budget Smartwatch", url: "https://www.amazon.com/s?k=budget+smartwatch" },
        { title: "Outdoor Rugged Watch", url: "https://www.amazon.com/s?k=rugged+smartwatch" },
        { title: "Slim Smartwatch", url: "https://www.amazon.com/s?k=slim+smartwatch" },
        { title: "Kids Smartwatch", url: "https://www.amazon.com/s?k=kids+smartwatch" },
        { title: "Blood Oxygen Watch", url: "https://www.amazon.com/s?k=blood+oxygen+smartwatch" },
        { title: "Heart Rate Monitor Watch", url: "https://www.amazon.com/s?k=heart+rate+smartwatch" },
        { title: "GPS Running Watch", url: "https://www.amazon.com/s?k=gps+running+watch" }
      ]
    },
    {
      id: "phone-cases",
      name: "Phone Cases",
      description: "Protective and stylish cases for popular phones.",
      items: [
        { title: "Clear Shockproof Case", url: "https://www.amazon.com/s?k=clear+shockproof+phone+case" },
        { title: "Leather Phone Case", url: "https://www.amazon.com/s?k=leather+phone+case" },
        { title: "Wallet Phone Case", url: "https://www.amazon.com/s?k=wallet+phone+case" },
        { title: "Slim Minimal Case", url: "https://www.amazon.com/s?k=slim+phone+case" },
        { title: "Rugged Protective Case", url: "https://www.amazon.com/s?k=rugged+phone+case" },
        { title: "Magnetic Compatible Case", url: "https://www.amazon.com/s?k=magnetic+phone+case" },
        { title: "Silicone Soft Case", url: "https://www.amazon.com/s?k=silicone+phone+case" },
        { title: "Pattern Print Case", url: "https://www.amazon.com/s?k=pattern+phone+case" },
        { title: "Bumper Frame Case", url: "https://www.amazon.com/s?k=bumper+phone+case" },
        { title: "Heavy Duty Case", url: "https://www.amazon.com/s?k=heavy+duty+phone+case" }
      ]
    },
    {
      id: "chargers",
      name: "Chargers",
      description: "Reliable charging options for everyday devices.",
      items: [
        { title: "USB-C Fast Charger", url: "https://www.amazon.com/s?k=usb+c+fast+charger" },
        { title: "Multi-Port Wall Charger", url: "https://www.amazon.com/s?k=multi+port+wall+charger" },
        { title: "Wireless Charging Pad", url: "https://www.amazon.com/s?k=wireless+charging+pad" },
        { title: "Car Charger USB-C", url: "https://www.amazon.com/s?k=usb+c+car+charger" },
        { title: "Portable Power Bank", url: "https://www.amazon.com/s?k=portable+power+bank" },
        { title: "Magnetic Wireless Charger", url: "https://www.amazon.com/s?k=magnetic+wireless+charger" },
        { title: "Travel Charger Bundle", url: "https://www.amazon.com/s?k=travel+charger+bundle" },
        { title: "Laptop USB-C Charger", url: "https://www.amazon.com/s?k=laptop+usb+c+charger" },
        { title: "Solar Charger", url: "https://www.amazon.com/s?k=solar+charger" },
        { title: "Quick Charge Wall Adapter", url: "https://www.amazon.com/s?k=quick+charge+wall+adapter" }
      ]
    },
    {
      id: "kitchen-knives",
      name: "Kitchen Knives",
      description: "Essential knives for home cooking.",
      items: [
        { title: "Chef's Knife", url: "https://www.amazon.com/s?k=chef+knife" },
        { title: "Paring Knife", url: "https://www.amazon.com/s?k=paring+knife" },
        { title: "Serrated Bread Knife", url: "https://www.amazon.com/s?k=bread+knife" },
        { title: "Santoku Knife", url: "https://www.amazon.com/s?k=santoku+knife" },
        { title: "Utility Knife", url: "https://www.amazon.com/s?k=utility+knife" },
        { title: "Fillet Knife", url: "https://www.amazon.com/s?k=fillet+knife" },
        { title: "Boning Knife", url: "https://www.amazon.com/s?k=boning+knife" },
        { title: "Cleaver Knife", url: "https://www.amazon.com/s?k=cleaver+knife" },
        { title: "Nakiri Knife", url: "https://www.amazon.com/s?k=nakiri+knife" },
        { title: "Tomato Knife", url: "https://www.amazon.com/s?k=tomato+knife" }
      ]
    },
    {
      id: "cutting-boards",
      name: "Cutting Boards",
      description: "Durable surfaces for prep work.",
      items: [
        { title: "Bamboo Cutting Board", url: "https://www.amazon.com/s?k=bamboo+cutting+board" },
        { title: "Plastic Dishwasher-Safe Board", url: "https://www.amazon.com/s?k=plastic+cutting+board+dishwasher+safe" },
        { title: "Wood Carving Board", url: "https://www.amazon.com/s?k=wood+carving+board" },
        { title: "Flexible Cutting Mats", url: "https://www.amazon.com/s?k=flexible+cutting+mats" },
        { title: "Large Prep Board", url: "https://www.amazon.com/s?k=large+cutting+board" },
        { title: "Juice Groove Board", url: "https://www.amazon.com/s?k=juice+groove+cutting+board" },
        { title: "Reversible Cutting Board", url: "https://www.amazon.com/s?k=reversible+cutting+board" },
        { title: "Composite Cutting Board", url: "https://www.amazon.com/s?k=composite+cutting+board" },
        { title: "Glass Cutting Board", url: "https://www.amazon.com/s?k=glass+cutting+board" },
        { title: "Butcher Block Board", url: "https://www.amazon.com/s?k=butcher+block+cutting+board" }
      ]
    },
    {
      id: "air-fryers",
      name: "Air Fryers",
      description: "Popular countertop air fryers for quick meals.",
      items: [
        { title: "Dual Basket Air Fryer", url: "https://www.amazon.com/s?k=dual+basket+air+fryer" },
        { title: "Compact Air Fryer", url: "https://www.amazon.com/s?k=compact+air+fryer" },
        { title: "Large Capacity Air Fryer", url: "https://www.amazon.com/s?k=large+capacity+air+fryer" },
        { title: "Air Fryer Oven Combo", url: "https://www.amazon.com/s?k=air+fryer+oven+combo" },
        { title: "Smart WiFi Air Fryer", url: "https://www.amazon.com/s?k=wifi+air+fryer" },
        { title: "Stainless Steel Air Fryer", url: "https://www.amazon.com/s?k=stainless+steel+air+fryer" },
        { title: "Digital Air Fryer", url: "https://www.amazon.com/s?k=digital+air+fryer" },
        { title: "Air Fryer with Window", url: "https://www.amazon.com/s?k=air+fryer+window" },
        { title: "Oil-Less Air Fryer", url: "https://www.amazon.com/s?k=oil+less+air+fryer" },
        { title: "Budget Air Fryer", url: "https://www.amazon.com/s?k=budget+air+fryer" }
      ]
    },
    {
      id: "slow-cookers",
      name: "Slow Cookers",
      description: "Set-and-forget cookers for stews and roasts.",
      items: [
        { title: "Programmable Slow Cooker", url: "https://www.amazon.com/s?k=programmable+slow+cooker" },
        { title: "Large 8qt Slow Cooker", url: "https://www.amazon.com/s?k=8+quart+slow+cooker" },
        { title: "Travel Locking Lid Slow Cooker", url: "https://www.amazon.com/s?k=locking+lid+slow+cooker" },
        { title: "Compact Slow Cooker", url: "https://www.amazon.com/s?k=small+slow+cooker" },
        { title: "Stainless Steel Slow Cooker", url: "https://www.amazon.com/s?k=stainless+steel+slow+cooker" },
        { title: "Manual Dial Slow Cooker", url: "https://www.amazon.com/s?k=manual+slow+cooker" },
        { title: "Multi-Function Cooker", url: "https://www.amazon.com/s?k=multi+function+slow+cooker" },
        { title: "Portable Slow Cooker", url: "https://www.amazon.com/s?k=portable+slow+cooker" },
        { title: "Oval Slow Cooker", url: "https://www.amazon.com/s?k=oval+slow+cooker" },
        { title: "Ceramic Insert Slow Cooker", url: "https://www.amazon.com/s?k=ceramic+slow+cooker" }
      ]
    },
    {
      id: "blenders",
      name: "Blenders",
      description: "Smoothies, soups, and more.",
      items: [
        { title: "High-Power Blender", url: "https://www.amazon.com/s?k=high+power+blender" },
        { title: "Personal Smoothie Blender", url: "https://www.amazon.com/s?k=personal+smoothie+blender" },
        { title: "Immersion Hand Blender", url: "https://www.amazon.com/s?k=immersion+hand+blender" },
        { title: "Glass Jar Blender", url: "https://www.amazon.com/s?k=glass+jar+blender" },
        { title: "Quiet Blender", url: "https://www.amazon.com/s?k=quiet+blender" },
        { title: "Portable USB Blender", url: "https://www.amazon.com/s?k=portable+usb+blender" },
        { title: "Multi-Speed Blender", url: "https://www.amazon.com/s?k=multi+speed+blender" },
        { title: "Budget Blender", url: "https://www.amazon.com/s?k=budget+blender" },
        { title: "Food & Blender Combo", url: "https://www.amazon.com/s?k=blender+food+processor+combo" },
        { title: "Smart Touchscreen Blender", url: "https://www.amazon.com/s?k=smart+blender" }
      ]
    },
    {
      id: "vacuum-cleaners",
      name: "Vacuum Cleaners",
      description: "Keep floors tidy with these popular vacuums.",
      items: [
        { title: "Cordless Stick Vacuum", url: "https://www.amazon.com/s?k=cordless+stick+vacuum" },
        { title: "Robot Vacuum", url: "https://www.amazon.com/s?k=robot+vacuum" },
        { title: "Upright Vacuum", url: "https://www.amazon.com/s?k=upright+vacuum+cleaner" },
        { title: "Canister Vacuum", url: "https://www.amazon.com/s?k=canister+vacuum+cleaner" },
        { title: "Handheld Vacuum", url: "https://www.amazon.com/s?k=handheld+vacuum" },
        { title: "Vacuum for Pet Hair", url: "https://www.amazon.com/s?k=pet+hair+vacuum" },
        { title: "Wet Dry Vacuum", url: "https://www.amazon.com/s?k=wet+dry+vacuum" },
        { title: "Bagless Vacuum", url: "https://www.amazon.com/s?k=bagless+vacuum" },
        { title: "Car Vacuum", url: "https://www.amazon.com/s?k=car+vacuum" },
        { title: "Budget Vacuum", url: "https://www.amazon.com/s?k=budget+vacuum" }
      ]
    },
    {
      id: "dish-soap",
      name: "Dish Soap",
      description: "Effective formulas for everyday dish cleaning.",
      items: [
        { title: "Concentrated Dish Soap", url: "https://www.amazon.com/s?k=concentrated+dish+soap" },
        { title: "Liquid Dish Soap", url: "https://www.amazon.com/s?k=liquid+dish+soap" },
        { title: "Eco-Friendly Dish Soap", url: "https://www.amazon.com/s?k=eco+friendly+dish+soap" },
        { title: "Unscented Dish Soap", url: "https://www.amazon.com/s?k=unscented+dish+soap" },
        { title: "Lemon Scent Dish Soap", url: "https://www.amazon.com/s?k=lemon+dish+soap" },
        { title: "Foaming Dish Soap", url: "https://www.amazon.com/s?k=foaming+dish+soap" },
        { title: "Dish Soap Refill", url: "https://www.amazon.com/s?k=dish+soap+refill" },
        { title: "Dish Soap for Grease", url: "https://www.amazon.com/s?k=grease+dish+soap" },
        { title: "Bulk Dish Soap", url: "https://www.amazon.com/s?k=bulk+dish+soap" },
        { title: "Gentle Hands Dish Soap", url: "https://www.amazon.com/s?k=gentle+dish+soap" }
      ]
    },
    {
      id: "laundry-detergent",
      name: "Laundry Detergent",
      description: "Reliable detergents for fresh clothes.",
      items: [
        { title: "Liquid Laundry Detergent", url: "https://www.amazon.com/s?k=liquid+laundry+detergent" },
        { title: "Concentrated Laundry Detergent", url: "https://www.amazon.com/s?k=concentrated+laundry+detergent" },
        { title: "Laundry Pods", url: "https://www.amazon.com/s?k=laundry+pods" },
        { title: "Sensitive Skin Detergent", url: "https://www.amazon.com/s?k=sensitive+skin+detergent" },
        { title: "Eco Laundry Detergent", url: "https://www.amazon.com/s?k=eco+laundry+detergent" },
        { title: "Powder Laundry Detergent", url: "https://www.amazon.com/s?k=powder+laundry+detergent" },
        { title: "Cold Water Detergent", url: "https://www.amazon.com/s?k=cold+water+detergent" },
        { title: "Stain Fighting Detergent", url: "https://www.amazon.com/s?k=stain+fighting+detergent" },
        { title: "High Efficiency Detergent", url: "https://www.amazon.com/s?k=he+laundry+detergent" },
        { title: "Fresh Scent Detergent", url: "https://www.amazon.com/s?k=fresh+scent+detergent" }
      ]
    },
    {
      id: "trash-bags",
      name: "Trash Bags",
      description: "Common sizes and strong options for waste bins.",
      items: [
        { title: "Tall Kitchen Trash Bags", url: "https://www.amazon.com/s?k=tall+kitchen+trash+bags" },
        { title: "Drawstring Trash Bags", url: "https://www.amazon.com/s?k=drawstring+trash+bags" },
        { title: "Heavy Duty Contractor Bags", url: "https://www.amazon.com/s?k=contractor+trash+bags" },
        { title: "Small Bathroom Trash Bags", url: "https://www.amazon.com/s?k=bathroom+trash+bags" },
        { title: "Compostable Trash Bags", url: "https://www.amazon.com/s?k=compostable+trash+bags" },
        { title: "Scented Trash Bags", url: "https://www.amazon.com/s?k=scented+trash+bags" },
        { title: "Recycling Bags", url: "https://www.amazon.com/s?k=recycling+bags" },
        { title: "Leaf Yard Bags", url: "https://www.amazon.com/s?k=yard+trash+bags" },
        { title: "Extra Large Trash Bags", url: "https://www.amazon.com/s?k=extra+large+trash+bags" },
        { title: "Drawstring Clear Bags", url: "https://www.amazon.com/s?k=clear+drawstring+trash+bags" }
      ]
    },
    {
      id: "toilet-paper",
      name: "Toilet Paper",
      description: "Household toilet paper options.",
      items: [
        { title: "Soft Toilet Paper", url: "https://www.amazon.com/s?k=soft+toilet+paper" },
        { title: "Strong Toilet Paper", url: "https://www.amazon.com/s?k=strong+toilet+paper" },
        { title: "Septic Safe Toilet Paper", url: "https://www.amazon.com/s?k=septic+safe+toilet+paper" },
        { title: "Mega Roll Toilet Paper", url: "https://www.amazon.com/s?k=mega+roll+toilet+paper" },
        { title: "Bulk Toilet Paper", url: "https://www.amazon.com/s?k=bulk+toilet+paper" },
        { title: "Eco-Friendly Toilet Paper", url: "https://www.amazon.com/s?k=eco+friendly+toilet+paper" },
        { title: "Unscented Toilet Paper", url: "https://www.amazon.com/s?k=unscented+toilet+paper" },
        { title: "2 Ply Toilet Paper", url: "https://www.amazon.com/s?k=2+ply+toilet+paper" },
        { title: "3 Ply Toilet Paper", url: "https://www.amazon.com/s?k=3+ply+toilet+paper" },
        { title: "Toilet Paper Tissue Pack", url: "https://www.amazon.com/s?k=toilet+paper+tissue+pack" }
      ]
    },
    {
      id: "paper-towels",
      name: "Paper Towels",
      description: "Absorbent towels for spills and cleaning.",
      items: [
        { title: "Select-A-Size Paper Towels", url: "https://www.amazon.com/s?k=select+a+size+paper+towels" },
        { title: "Extra Absorbent Paper Towels", url: "https://www.amazon.com/s?k=absorbent+paper+towels" },
        { title: "Bulk Pack Paper Towels", url: "https://www.amazon.com/s?k=bulk+paper+towels" },
        { title: "Eco-Friendly Paper Towels", url: "https://www.amazon.com/s?k=eco+friendly+paper+towels" },
        { title: "Printed Paper Towels", url: "https://www.amazon.com/s?k=printed+paper+towels" },
        { title: "Heavy Duty Paper Towels", url: "https://www.amazon.com/s?k=heavy+duty+paper+towels" },
        { title: "Reusable Paper Towels", url: "https://www.amazon.com/s?k=reusable+paper+towels" },
        { title: "Soft Paper Towels", url: "https://www.amazon.com/s?k=soft+paper+towels" },
        { title: "Budget Paper Towels", url: "https://www.amazon.com/s?k=budget+paper+towels" },
        { title: "Large Roll Paper Towels", url: "https://www.amazon.com/s?k=large+roll+paper+towels" }
      ]
    },
    {
      id: "coffee-makers",
      name: "Coffee Makers",
      description: "Popular machines for daily coffee brewing.",
      items: [
        { title: "Single Serve Coffee Maker", url: "https://www.amazon.com/s?k=single+serve+coffee+maker" },
        { title: "Drip Coffee Maker", url: "https://www.amazon.com/s?k=drip+coffee+maker" },
        { title: "Programmable Coffee Maker", url: "https://www.amazon.com/s?k=programmable+coffee+maker" },
        { title: "Thermal Carafe Coffee Maker", url: "https://www.amazon.com/s?k=thermal+carafe+coffee+maker" },
        { title: "Compact Coffee Maker", url: "https://www.amazon.com/s?k=compact+coffee+maker" },
        { title: "Coffee Maker with Grinder", url: "https://www.amazon.com/s?k=coffee+maker+with+grinder" },
        { title: "Budget Coffee Maker", url: "https://www.amazon.com/s?k=budget+coffee+maker" },
        { title: "Dual Brew Coffee Maker", url: "https://www.amazon.com/s?k=dual+brew+coffee+maker" },
        { title: "Cold Brew Coffee Maker", url: "https://www.amazon.com/s?k=cold+brew+coffee+maker" },
        { title: "Stainless Coffee Maker", url: "https://www.amazon.com/s?k=stainless+coffee+maker" }
      ]
    },
    {
      id: "flashlights",
      name: "Flashlights",
      description: "Handheld lights for emergencies and outdoor use.",
      items: [
        { title: "Rechargeable LED Flashlight", url: "https://www.amazon.com/s?k=rechargeable+led+flashlight" },
        { title: "Compact Pocket Flashlight", url: "https://www.amazon.com/s?k=compact+flashlight" },
        { title: "Waterproof Flashlight", url: "https://www.amazon.com/s?k=waterproof+flashlight" },
        { title: "Headlamp Flashlight", url: "https://www.amazon.com/s?k=headlamp+flashlight" },
        { title: "Camping Flashlight", url: "https://www.amazon.com/s?k=camping+flashlight" },
        { title: "Tactical Flashlight", url: "https://www.amazon.com/s?k=tactical+flashlight" },
        { title: "Mini Keychain Flashlight", url: "https://www.amazon.com/s?k=keychain+flashlight" },
        { title: "Work Flashlight", url: "https://www.amazon.com/s?k=work+flashlight" },
        { title: "Lantern Style Flashlight", url: "https://www.amazon.com/s?k=lantern+flashlight" },
        { title: "Budget Flashlight", url: "https://www.amazon.com/s?k=budget+flashlight" }
      ]
    },
    {
      id: "batteries",
      name: "Batteries",
      description: "Frequently needed household battery types.",
      items: [
        { title: "AA Batteries Bulk", url: "https://www.amazon.com/s?k=aa+batteries+bulk" },
        { title: "AAA Batteries Bulk", url: "https://www.amazon.com/s?k=aaa+batteries+bulk" },
        { title: "Rechargeable AA Batteries", url: "https://www.amazon.com/s?k=rechargeable+aa+batteries" },
        { title: "Rechargeable AAA Batteries", url: "https://www.amazon.com/s?k=rechargeable+aaa+batteries" },
        { title: "9V Batteries", url: "https://www.amazon.com/s?k=9v+batteries" },
        { title: "CR2032 Batteries", url: "https://www.amazon.com/s?k=cr2032+battery" },
        { title: "D Cell Batteries", url: "https://www.amazon.com/s?k=d+cell+batteries" },
        { title: "C Cell Batteries", url: "https://www.amazon.com/s?k=c+cell+batteries" },
        { title: "Lithium AA Batteries", url: "https://www.amazon.com/s?k=lithium+aa+batteries" },
        { title: "Battery Variety Pack", url: "https://www.amazon.com/s?k=battery+variety+pack" }
      ]
    },
    {
      id: "light-bulbs",
      name: "Light Bulbs",
      description: "Common bulb types for home lighting.",
      items: [
        { title: "LED A19 Light Bulbs", url: "https://www.amazon.com/s?k=led+a19+light+bulbs" },
        { title: "Soft White Light Bulbs", url: "https://www.amazon.com/s?k=soft+white+light+bulbs" },
        { title: "Daylight Light Bulbs", url: "https://www.amazon.com/s?k=daylight+light+bulbs" },
        { title: "Smart Light Bulbs", url: "https://www.amazon.com/s?k=smart+light+bulbs" },
        { title: "Dimmable LED Bulbs", url: "https://www.amazon.com/s?k=dimmable+led+bulbs" },
        { title: "Candelabra Light Bulbs", url: "https://www.amazon.com/s?k=candelabra+light+bulbs" },
        { title: "Flood Light Bulbs", url: "https://www.amazon.com/s?k=flood+light+bulbs" },
        { title: "BR30 Light Bulbs", url: "https://www.amazon.com/s?k=br30+light+bulbs" },
        { title: "Outdoor Light Bulbs", url: "https://www.amazon.com/s?k=outdoor+light+bulbs" },
        { title: "Vintage Edison Bulbs", url: "https://www.amazon.com/s?k=vintage+edison+bulbs" }
      ]
    },
    {
      id: "notebooks",
      name: "Notebooks",
      description: "Popular notebooks for school and work.",
      items: [
        { title: "Spiral Notebook College Ruled", url: "https://www.amazon.com/s?k=spiral+notebook+college+ruled" },
        { title: "Composition Notebook", url: "https://www.amazon.com/s?k=composition+notebook" },
        { title: "Hardcover Journal Notebook", url: "https://www.amazon.com/s?k=hardcover+journal+notebook" },
        { title: "Dot Grid Notebook", url: "https://www.amazon.com/s?k=dot+grid+notebook" },
        { title: "Planner Notebook", url: "https://www.amazon.com/s?k=planner+notebook" },
        { title: "Small Pocket Notebook", url: "https://www.amazon.com/s?k=pocket+notebook" },
        { title: "Eco-Friendly Notebook", url: "https://www.amazon.com/s?k=eco+friendly+notebook" },
        { title: "Academic Notebook", url: "https://www.amazon.com/s?k=academic+notebook" },
        { title: "Sketch Notebook", url: "https://www.amazon.com/s?k=sketch+notebook" },
        { title: "Budget Notebook Pack", url: "https://www.amazon.com/s?k=budget+notebook+pack" }
      ]
  },
  {
      id: "mattress",
      name: "Mattress",
      description: "Best-value mattresses for comfort and support.",
      items: [
        { title: "Memory Foam Mattress (Queen)", url: "https://www.amazon.com/s?k=memory+foam+mattress+queen" },
        { title: "Hybrid Mattress (Queen)", url: "https://www.amazon.com/s?k=hybrid+mattress+queen" },
        { title: "Latex Mattress (Queen)", url: "https://www.amazon.com/s?k=latex+mattress+queen" },
        { title: "Cooling Gel Mattress", url: "https://www.amazon.com/s?k=cooling+gel+mattress" },
        { title: "Firm Mattress (Queen)", url: "https://www.amazon.com/s?k=firm+mattress+queen" },
        { title: "Medium Mattress (Queen)", url: "https://www.amazon.com/s?k=medium+mattress+queen" },
        { title: "Soft Mattress (Queen)", url: "https://www.amazon.com/s?k=soft+mattress+queen" },
        { title: "Mattress in a Box", url: "https://www.amazon.com/s?k=mattress+in+a+box" },
        { title: "King Mattress", url: "https://www.amazon.com/s?k=king+mattress" },
        { title: "Full Mattress", url: "https://www.amazon.com/s?k=full+mattress" }
      ]
    },
    {
      id: "pens",
      name: "Pens",
      description: "Everyday writers to premium picks.",
      items: [
        { title: "Gel Pens (0.7mm)", url: "https://www.amazon.com/s?k=gel+pens+0.7mm" },
        { title: "Rollerball Pens", url: "https://www.amazon.com/s?k=rollerball+pen" },
        { title: "Ballpoint Pens", url: "https://www.amazon.com/s?k=ballpoint+pen" },
        { title: "Fine Liner Pens", url: "https://www.amazon.com/s?k=fine+liner+pen" },
        { title: "Fountain Pen Beginner", url: "https://www.amazon.com/s?k=fountain+pen+beginner" },
        { title: "Retractable Pens", url: "https://www.amazon.com/s?k=retractable+pen" },
        { title: "Multicolor Pen", url: "https://www.amazon.com/s?k=multicolor+pen" },
        { title: "Needle Point Pen", url: "https://www.amazon.com/s?k=needle+point+pen" },
        { title: "Quick-Dry Pen", url: "https://www.amazon.com/s?k=quick+dry+pen" },
        { title: "Premium Pen", url: "https://www.amazon.com/s?k=premium+pen" }
      ]
    },
    {
      id: "markers-for-kids",
      name: "Markers for Kids",
      description: "Washable, non-toxic markers for young artists.",
      items: [
        { title: "Washable Markers Set", url: "https://www.amazon.com/s?k=washable+markers+kids" },
        { title: "No-Bleed Coloring Markers", url: "https://www.amazon.com/s?k=no+bleed+markers+kids" },
        { title: "Scented Markers", url: "https://www.amazon.com/s?k=scented+markers+kids" },
        { title: "Fine Tip Markers", url: "https://www.amazon.com/s?k=fine+tip+markers+kids" },
        { title: "Broadline Markers", url: "https://www.amazon.com/s?k=broadline+markers+kids" },
        { title: "Skin Tone Markers", url: "https://www.amazon.com/s?k=skin+tone+markers+kids" },
        { title: "Glitter Markers", url: "https://www.amazon.com/s?k=glitter+markers+kids" },
        { title: "Dry Erase Markers", url: "https://www.amazon.com/s?k=dry+erase+markers+kids" },
        { title: "Markers with Case", url: "https://www.amazon.com/s?k=markers+with+case+kids" },
        { title: "Markers Bulk", url: "https://www.amazon.com/s?k=markers+bulk+kids" }
      ]
    },
    {
      id: "printers",
      name: "Printers",
      description: "Reliable printers for home and office.",
      items: [
        { title: "All-in-One Printer", url: "https://www.amazon.com/s?k=all+in+one+printer" },
        { title: "Laser Printer", url: "https://www.amazon.com/s?k=laser+printer" },
        { title: "Color Laser Printer", url: "https://www.amazon.com/s?k=color+laser+printer" },
        { title: "Inkjet Printer", url: "https://www.amazon.com/s?k=inkjet+printer" },
        { title: "Photo Printer", url: "https://www.amazon.com/s?k=photo+printer" },
        { title: "Compact Printer", url: "https://www.amazon.com/s?k=compact+printer" },
        { title: "Duplex Printer", url: "https://www.amazon.com/s?k=duplex+printer" },
        { title: "Small Office Printer", url: "https://www.amazon.com/s?k=small+office+printer" },
        { title: "Portable Printer", url: "https://www.amazon.com/s?k=portable+printer" },
        { title: "Refillable Ink Printer", url: "https://www.amazon.com/s?k=refillable+ink+printer" }
      ]
    }
  ]
};
