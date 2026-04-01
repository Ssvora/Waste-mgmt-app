const CATEGORIES = {
  recycle: {
    id: 'recycle',
    label: 'Recycle',
    color: '#2196F3',
    icon: '\u267B\uFE0F',
    description: 'Place in your recycling bin',
  },
  compost: {
    id: 'compost',
    label: 'Compost',
    color: '#4CAF50',
    icon: '\uD83C\uDF31',
    description: 'Add to your compost bin or green waste',
  },
  landfill: {
    id: 'landfill',
    label: 'Landfill',
    color: '#757575',
    icon: '\uD83D\uDDD1\uFE0F',
    description: 'Place in your general waste bin',
  },
  hazardous: {
    id: 'hazardous',
    label: 'Hazardous Waste',
    color: '#F44336',
    icon: '\u26A0\uFE0F',
    description: 'Take to a hazardous waste collection facility',
  },
  donate: {
    id: 'donate',
    label: 'Donate / Reuse',
    color: '#FF9800',
    icon: '\uD83D\uDC9B',
    description: 'Consider donating or repurposing',
  },
  ewaste: {
    id: 'ewaste',
    label: 'E-Waste',
    color: '#9C27B0',
    icon: '\uD83D\uDD0C',
    description: 'Take to an e-waste recycling center',
  },
};

const WASTE_ITEMS = [
  // Paper & Cardboard
  { name: 'Newspaper', category: 'recycle', keywords: ['paper', 'news', 'print'], tip: 'Keep dry and clean. Bundle loosely.' },
  { name: 'Cardboard box', category: 'recycle', keywords: ['box', 'shipping', 'package', 'amazon'], tip: 'Flatten boxes to save space. Remove tape and labels if possible.' },
  { name: 'Pizza box', category: 'compost', keywords: ['pizza', 'food box', 'greasy'], tip: 'Greasy pizza boxes cannot be recycled. Compost or landfill instead.' },
  { name: 'Magazine', category: 'recycle', keywords: ['glossy', 'print', 'reading'], tip: 'Glossy paper is recyclable. Remove plastic wrapping first.' },
  { name: 'Paper towel', category: 'compost', keywords: ['tissue', 'napkin', 'kitchen'], tip: 'Used paper towels can be composted unless contaminated with chemicals.' },
  { name: 'Shredded paper', category: 'compost', keywords: ['shred', 'confetti'], tip: 'Shredded paper is too small for recycling machinery. Compost it instead.' },
  { name: 'Wrapping paper', category: 'landfill', keywords: ['gift', 'wrap', 'present', 'holiday'], tip: 'Metallic or glittery wrapping paper is not recyclable. Plain paper wrap can be recycled.' },
  { name: 'Envelope', category: 'recycle', keywords: ['mail', 'letter', 'post'], tip: 'Remove the plastic window before recycling, or recycle as-is if your facility accepts it.' },

  // Plastics
  { name: 'Plastic bottle', category: 'recycle', keywords: ['water bottle', 'soda', 'drink', 'pet'], tip: 'Rinse, crush, and replace the cap before recycling.' },
  { name: 'Plastic bag', category: 'landfill', keywords: ['grocery bag', 'shopping bag', 'poly'], tip: 'Most curbside programs do not accept plastic bags. Return to grocery store drop-off bins.' },
  { name: 'Styrofoam', category: 'landfill', keywords: ['foam', 'polystyrene', 'packing peanuts', 'takeout container'], tip: 'Styrofoam is not recyclable in most areas. Avoid using it when possible.' },
  { name: 'Plastic wrap', category: 'landfill', keywords: ['cling wrap', 'saran', 'film'], tip: 'Plastic film tangles recycling machinery. Use beeswax wraps as an alternative.' },
  { name: 'Plastic utensils', category: 'landfill', keywords: ['fork', 'spoon', 'knife', 'cutlery', 'disposable'], tip: 'Switch to reusable cutlery. Most plastic utensils are not recyclable.' },
  { name: 'Plastic container (food)', category: 'recycle', keywords: ['tupperware', 'takeout', 'deli', 'yogurt'], tip: 'Rinse clean before recycling. Check the number on the bottom — #1 and #2 are widely accepted.' },

  // Glass
  { name: 'Glass bottle', category: 'recycle', keywords: ['wine', 'beer', 'glass jar', 'beverage'], tip: 'Rinse and remove caps. Glass can be recycled endlessly without losing quality.' },
  { name: 'Broken glass', category: 'landfill', keywords: ['shattered', 'mirror', 'window'], tip: 'Wrap in newspaper and label "sharp" before placing in trash to protect waste workers.' },
  { name: 'Drinking glass', category: 'landfill', keywords: ['cup', 'tumbler', 'pyrex', 'ceramic'], tip: 'Drinking glasses and Pyrex have different melting points than bottle glass and cannot be recycled together.' },

  // Metal
  { name: 'Aluminum can', category: 'recycle', keywords: ['soda can', 'beer can', 'tin'], tip: 'Rinse before recycling. Aluminum is infinitely recyclable and saves 95% of the energy needed to make new aluminum.' },
  { name: 'Tin foil', category: 'recycle', keywords: ['aluminum foil', 'foil'], tip: 'Clean foil can be recycled. Ball it up so it does not blow away at the facility.' },
  { name: 'Aerosol can', category: 'recycle', keywords: ['spray', 'deodorant', 'hairspray'], tip: 'Must be completely empty. Do not puncture. Remove plastic caps.' },

  // Food & Organic
  { name: 'Fruit / vegetable scraps', category: 'compost', keywords: ['banana peel', 'apple core', 'peels', 'food scrap', 'produce'], tip: 'Great for composting! Cut into smaller pieces to speed up decomposition.' },
  { name: 'Coffee grounds', category: 'compost', keywords: ['coffee', 'filter', 'espresso', 'grounds'], tip: 'Coffee grounds and paper filters are both compostable. Great for garden soil.' },
  { name: 'Egg shells', category: 'compost', keywords: ['egg', 'shell'], tip: 'Crush before composting to speed breakdown. Great source of calcium for soil.' },
  { name: 'Meat / dairy', category: 'landfill', keywords: ['chicken', 'beef', 'cheese', 'milk', 'bones'], tip: 'Home compost bins generally cannot handle meat or dairy. Use municipal green bins if available.' },
  { name: 'Cooking oil', category: 'hazardous', keywords: ['grease', 'frying oil', 'fat'], tip: 'Never pour down the drain. Let cool and take to a recycling center or mix with absorbent material for landfill.' },
  { name: 'Tea bags', category: 'compost', keywords: ['tea', 'herbal'], tip: 'Most tea bags are compostable. Check for non-compostable staples or plastic mesh.' },
  { name: 'Yard waste', category: 'compost', keywords: ['leaves', 'grass', 'branches', 'lawn', 'garden'], tip: 'Yard waste decomposes well. Many municipalities offer green waste pickup.' },

  // Electronics
  { name: 'Cell phone', category: 'ewaste', keywords: ['phone', 'smartphone', 'iphone', 'android', 'mobile'], tip: 'Wipe personal data before recycling. Many carriers and retailers offer trade-in programs.' },
  { name: 'Laptop / computer', category: 'ewaste', keywords: ['computer', 'macbook', 'pc', 'desktop', 'monitor'], tip: 'Remove hard drive and wipe data. Many manufacturers offer take-back programs.' },
  { name: 'TV / monitor', category: 'ewaste', keywords: ['television', 'screen', 'display'], tip: 'Contains hazardous materials. Never place in regular trash. Find a certified e-waste recycler.' },
  { name: 'Cables / chargers', category: 'ewaste', keywords: ['wire', 'cord', 'usb', 'charger', 'adapter'], tip: 'Tangle-free recycling: bundle with a rubber band. Many stores accept old cables.' },
  { name: 'Printer cartridge', category: 'ewaste', keywords: ['ink', 'toner', 'printer'], tip: 'Many office supply stores offer free cartridge recycling and rewards.' },

  // Batteries & Hazardous
  { name: 'Alkaline battery', category: 'hazardous', keywords: ['battery', 'aa', 'aaa', 'd cell', '9v'], tip: 'Some areas allow single-use alkaline batteries in trash. Check locally. Tape terminals for safety.' },
  { name: 'Lithium battery', category: 'hazardous', keywords: ['lithium', 'rechargeable', 'li-ion', 'lipo'], tip: 'Fire risk! Never place in regular trash or recycling. Take to a designated collection point.' },
  { name: 'Light bulb (CFL)', category: 'hazardous', keywords: ['compact fluorescent', 'cfl', 'bulb'], tip: 'Contains mercury. Take to a hardware store or hazardous waste facility.' },
  { name: 'Light bulb (LED)', category: 'recycle', keywords: ['led', 'bulb'], tip: 'LED bulbs can often be recycled at e-waste or hardware stores.' },
  { name: 'Light bulb (incandescent)', category: 'landfill', keywords: ['bulb', 'old bulb', 'filament'], tip: 'Incandescent bulbs are not recyclable. Wrap and place in regular trash.' },
  { name: 'Paint', category: 'hazardous', keywords: ['latex', 'oil paint', 'stain', 'varnish'], tip: 'Latex paint can be dried out and landfilled. Oil-based paint must go to hazardous waste.' },
  { name: 'Motor oil', category: 'hazardous', keywords: ['car oil', 'engine oil', 'automotive'], tip: 'Many auto parts stores and service stations accept used motor oil for free.' },
  { name: 'Medications', category: 'hazardous', keywords: ['pills', 'drugs', 'prescription', 'medicine', 'pharmacy'], tip: 'Never flush medications. Use pharmacy take-back programs or DEA drop-off sites.' },

  // Textiles & Clothing
  { name: 'Clothing (good condition)', category: 'donate', keywords: ['shirt', 'pants', 'dress', 'jacket', 'clothes'], tip: 'Donate to thrift stores or clothing drives. Even worn items can be recycled into rags or insulation.' },
  { name: 'Shoes', category: 'donate', keywords: ['sneakers', 'boots', 'sandals', 'footwear'], tip: 'Wearable shoes can be donated. Worn-out athletic shoes are accepted by some brands for recycling.' },
  { name: 'Torn / stained fabric', category: 'landfill', keywords: ['rag', 'torn', 'stained', 'textile'], tip: 'Some textile recyclers accept damaged fabric. Check for local textile recycling bins.' },

  // Furniture & Large Items
  { name: 'Furniture', category: 'donate', keywords: ['couch', 'sofa', 'chair', 'table', 'desk', 'bed', 'mattress'], tip: 'Good condition? Donate! Many charities offer free pickup. Otherwise, schedule bulk waste collection.' },
  { name: 'Mattress', category: 'donate', keywords: ['bed', 'mattress'], tip: 'Mattresses can be recycled at specialized facilities. Some retailers offer take-back when delivering new ones.' },
  { name: 'Books', category: 'donate', keywords: ['book', 'textbook', 'novel', 'reading'], tip: 'Donate to libraries, schools, or thrift stores. Damaged books can be recycled.' },

  // Miscellaneous
  { name: 'Diapers', category: 'landfill', keywords: ['diaper', 'nappy', 'baby'], tip: 'Disposable diapers are landfill only. Consider cloth diapers as a reusable alternative.' },
  { name: 'Pet waste', category: 'landfill', keywords: ['dog', 'cat', 'litter', 'poop', 'animal'], tip: 'Pet waste should not be composted at home due to pathogens. Use biodegradable bags.' },
  { name: 'Cigarette butts', category: 'landfill', keywords: ['cigarette', 'smoking', 'butt'], tip: 'Cigarette filters are not biodegradable. Some programs like TerraCycle offer mail-in recycling.' },
  { name: 'Chewing gum', category: 'landfill', keywords: ['gum', 'bubblegum'], tip: 'Gum is not recyclable or compostable. Wrap in paper before disposing.' },
];

export { CATEGORIES, WASTE_ITEMS };
