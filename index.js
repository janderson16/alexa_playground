'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.2a21392f-82df-4824-ba40-c3be7dcb02e1";

var SKILL_NAME = "Geography Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a geography fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "A hamlet is a village without a church and a town is not a city until it has a cathedral.",

    "About one-tenth of the earth's surface is permanently covered with ice.",

    "According to National Geographic, Mt. Everest grows about 4 millimeters a year: the two tectonic plates of Asia and India, which collided millions of years ago to form the Himalayas, continue to press against each other, causing the Himalyan peaks to grow slightly each year",

    "Alaska and California, with 8 each, are the US states with the most national park sites.",

    "All gondolas in Venice, Italy must be painted black, unless they belong to a high official.",

    "As of Dec. 31, 2000, the number of climbers summiting Mt. Everest reached 1314, and the number of deaths on the mountain reached 167.",

    "At 840,000 square miles, Greenland is the largest island in the world. It is three times the size of Texas. By comparison, Iceland is only 39,800 square miles.",

    "Australia is the only country that is also a continent.",

    "Canada is an Indian word meaning 'Big Village'.",

    "Damascus, Syria, was flourishing a couple of thousand years before Rome was founded in 753 BC, making it the oldest continuously inhabited city in existence.",

    "Devon is the only county in Great Britain to have two coasts.",

    "Disney World in Orlando, Florida covers 30,500 acres (46 square miles), making it twice the size of the island of Manhattan, New York.",

    "Dueling is legal in Paraguay as long as both parties are registered blood donors.",

    "El Azizia in Libya recorded a temperature of 136 degrees Fahrenheit (57.8 Celsius) on Sept. 13, 1922 -- the hottest ever measured.",

    "Europe has no deserts - it is the only continent without one.",

    "For every 10 successful attempts to climb Mount Everest there is one fatality.",

    "Forty-six percent of the world's water is in the Pacific Ocean; that's around 6 sextillion gallons of water. The Atlantic has 23.9 percent; the Indian, 20.3; the Arctic, 3.7 percent.",

    "French was the official language of England for over 600 years.",

    "Grand Rapids, Michigan was the first city in the US to put fluoride in their water.",

    "Hawaii is the only US state that grows coffee.",

    "Hawaii officially became apart of the US on June 14, 1900.",

    "If Monaco's ruling house of Grimaldi should ever be without an heir (male or female), the country will cease to be a sovereign state.",

    "In 1771 the kingdom of Poland was larger in are than any other European country except Russia and had a bigger population than any other European country except France.",

    "In the Great Seal of the US the eagle grasps 13 arrows and an olive branch.",

    "It is forbidden for aircraft to fly over the Taj Mahal.",

    "Japan is the world's leading importer of iron ore.",

    "La Paz, Bolivia, at 11,900 feet above sea-level, is the highest large city in the world. (According to Scholastic Book of World Records 2004, Wenchuan, China is the highest city in the world, at 16,730 feet about sea level. This city if part of Sichuan Province, southwest China. )",

    "Lake Pontchartrain Causeway at New Orleans, Louisiana, is the world's largest bridge. It is almost 24 miles (about 38 kilometers) long.",

    "Maine is the only state in the United States whose name has one syllable.",

    "Mexico City is sinking at a rate of 6 to 8 inches a year because it's built on top of an underground reservoir. Wells are drawing out more and more water for the city's growing population of more than 15 million people.",

    "Mexico City is the oldest capital city in the Americas.",

    "More water flows over Niagara Falls every year than over any other falls on earth.",

    "Most landfilled trash retains its original weight, volume, and form for 40 years.",

    "New Jersey, with 96, is the US state with the greatest number of hazardous waste sites.",

    "Quito in Ecuador, South America, is said to have the most pleasant climate in the world. It is called the 'Land of Eternal Spring.' The temperature rarely drops below 46 degrees Fahrenheit during the night, or exceed 72 degrees Fahrenheit during the day.",

    "St. Augustine, Florida is the oldest city in the US.",

    "Talking on a cellular phone while driving is against the law in Israel.",

    "The 1st US zoo was built in Philadelphia, PA, in 1876.",

    "The abbreviation 'ORD' for Chicago's O'Hare airport comes from the old name 'Orchard Field.'",

    "The Arctic ocean is the smallest and shallowest. The Arctic Ocean is the world's smallest ocean. It is mostly covered by solid ice, ice floes, and icebergs",

    "The Atlantic Ocean is saltier than the Pacific Ocean.",

    "The border between Canada and the U.S. is the world's longest frontier. It stretches 3,987 miles (6,416 km).",

    "The city of Rome was built on seven hills. They were Palatine, Capitoline, Quirinal, Viminal, Esquiline, Caelian, and Aventine.",

    "The city of St. Petersburg, Russia, was founded in 1703 by Peter the Great, hence the name, St. Petersburg. But it wasn't always that simple. In 1914, at the beginning of World War I, Russian leaders felt that Petersburg was too German-sounding. So they changed the name of the city to Petrograd -- to make it more Russian-sounding. Then, in 1924, the country's Soviet Communist leaders wanted to honor the founder of the Soviet Union, Vladimir I. Lenin. The city of Petrograd became Leningrad and was known as Leningrad until 1991 when the new Russian legislators -- no longer Soviet Communists -- wanted the city to reflect their change of government.",

    "The coldest temperature ever measured on Earth was -129 Fahrenheit (-89 Celsius) at Vostok, Antarctica, on July 21, 1983.",

    "The earth’s surface contains 196,950,711 square miles (510,100,000 square kilometers).",

    "The Eiffel Tower was built for the 1889 World's Fair.",

    "The first city to reach a population of 1 million people was Rome, Italy in 133 B.C. London, England reached the mark in 1810 and New York, USA made it in 1875. Today, there are over 300 cities in the world that boast a population in excess of 1 million.",

    "The flag of the Philippines is the only national flag that is flown differently during times of peace or war. A portion of the flag is blue, while the other is red. The blue portion is flown on top in time of peace and the red portion is flown in war time.",

    "The Fresh Kills Landfill site on Staten Island, New York, opened in 1948, is the world's largest. It covers 3,000 acres and receives up to 14,000 tons of garbage a day. It is scheduled to reach capacity and close by the year 2002.",

    "The Great Lakes are Lake Michigan, Lake Huron, Lake Superior, Lake Erie and Lake Ontario.",

    "The Great Lakes are the most important inland waterway in North America. All the lakes, except Lake Michigan, which lies entirely in the United States, are shared by the United States and Canada and form part of the border between these countries.",

    "The Great Lakes contain 6 quadrillion gallons of fresh water, one-fifth of the world's fresh surface water. The Great Lakes are the largest group of freshwater lakes in the world.",

    "The Great Lakes have a combined area of 94,230 square miles - larger than the states of New York, New Jersey, Connecticut, Rhode Island, Massachusetts, and Vermont combined.",

    "The Hollywood sign was first erected in 1923. Conceived as a real estate ad, it originally read Hollywoodland. The sign stands 50 feet tall, stretches 450 feet across, weighs 450,000 pounds.",

    "The international telephone dialing code for Antarctica is 672.",

    "The Jordanian city Amman was once called Philadelphia.",

    "The largest body of fresh water in the world is Lake Superior.",

    "The largest desert in the world, the Sahara, is 3,500,000 square miles.",

    "The largest US city in area is Juneau, Alaska, which covers 3,108 square miles. Los Angeles covers only 458.2 square miles.",

    "The longest railway in the world is the Trans-Siberian Railway or Trans-Siberian Railroad, built 1891-1916, a network of railways connecting European Russia with Russian Far East provinces. It is 9,288.2 kilometres (5,787 miles) long and spans 8 time zones.",

    "The Mauna Loa volcano in Hawaii is the largest volcano on Earth. It rises more than 50,000 feet (9.5 miles or 15.2 kilometers) above its base, which sits under the surface of the sea.",

    "The Ohio river forms at the confluence of the Allegheny and the Monongahela.",

    "The only continent without reptiles or snakes is Antarctica.",

    "The original name of Los Angeles was El Pueblo de Nuestra Senora la Reina de los Angeles del rio Porciuncula, translating into:The Village of our Lady the Queen of the Angels of the Porciuncula River.",

    "The Pantheon is the largest building from ancient Rome that survives intact.",

    "The river Danube empties into the Black Sea.",

    "The San Diego Zoo in California has the largest collection of animals in the world.",

    "The seven hills of Rome are the Palatine (on which the original city was built), the Capitoline, Quirinal, Viminal, Esquiline, Caelian, and Aventine.",

    "The smallest island with country status is Pitcairn in Polynesia, at just 1.75 square miles.",

    "The tallest monument built in the US, the Gateway Arch, in St. Louis, Missouri, is 630 feet tall.",

    "The US city with the highest murder rate is Detroit, with 45.3 homicides per 100,000 people.",

    "The Vatican's Swiss Guard still wears a uniform designed by Michelangelo in the early 16th century.",

    "The water in the Great Salt Lake of Utah is more than four times as salty as any ocean.",

    "The wettest spot in the world is located on the island of Kauai. Mt. Waialeale consistently records rainfall at the rate of nearly 500 inches per year.",

    "The world’s deadliest recorded earthquake occurred in 1557 in central China. It struck a region where most people lived in caves carved from soft rock. The dwellings collapsed, killing an estimated 830,000 people.",

    "The world’s largest statue of a mosquito is a roadside attraction in Komarno, Manitoba, the Mosquito Capital of Canada. Sculpted in 1984, it is made of steel and has a wingspan of 15 feet. It’s also a weathervane, swiveling in the wind.",

    "The world's highest railway is in Peru. The Central Railway climbs to 15,694 feet in the Galera tunnel, 108 miles from Lima. Tourists take it to get to the ruins of Machu Picchu.",

    "The world's longest suspension bridge opened to traffic on April 5, 1998. The 3,911-meter (12,831-feet) Akashi Kaikyo Bridge is 580 meters (1,900 feet) longer than the Humber Bridge in England, the previous record holder.",

    "The world's smallest independent state is the Vatican City, with a population of about 1,000 - and a zero birthrate.",

    "The world's tallest mountains, the Himalayas, are also the fastest growing. Their growth - about half an inch a year - is caused by the pressure exerted by two of Earth's continental plates (the Eurasian plate and the Indo-Australian plate) pushing against one another.",
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
