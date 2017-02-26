document.getElementById('submit').addEventListener('click', function() {
	var x = document.getElementById("myNumber").value;
	x = parseInt(x);
	/*Central NJ*/
	const centralJerseyLocations = ['Nearby organizations you can support and volunteer at are <a href="http://njconservation.org/index.cfm">NJ Conservation Organization</a>',' <a href="http://thewatershed.org/">Stony Brook-Millstone Watershed</a>'];
    const centralJersey = '<div class="displayedresult">It looks like you live in <div class="location">Central Jersey</div>. Here are things near you.<div style="height:10px;margin-bottom:10px;border-bottom:1px solid #ccc"></div>';
    const centralJerseySpecies = ['American Burying Beetle', ' Bald Eagle', ' Peregrine Falcon', " Mitchell's Satyr Butterfly", ' Dwarf Wedge Mussel', ' Shortnose Sturgeon']
    const centralJerseyFacts = '<br><br>The <div class="location">' + centralJerseySpecies + '</div> are federally endangered species near you. Keep an eye out for them and avoid disturbing/hunting/fishing for them.<br><img src="baldeagle.png" height=200px><div style="font-size:16px; display:inline;">The <div class="location">bald eagle</div> is one of the most endangered species near you.</div>';
    const centralJerseyEvents = '<br><br>Upcoming events near you are <div class="location">Go Green Day!</div> at <div class="location">Stony Brook-Millstone Watershed</div> on <div class="location">March 17</div> and <div class="location">Global Perspectives on Environmental Justice Series: Amitav Ghosh</div> at <div class="location">Princeton University</div> on <div class="location">March 30</div>.</div>';
    var centralJerseyZips = [07059, 07069, 07920, 07921, 07924, 07931, 07934, 07938, 07939, 07977, 07978, 08502, 08504, 08528, 08553, 08558, 08805, 08807, 08821, 08823, 08835, 08836, 08844, 08853, 08869, 08873, 08875, 08876, 08880, 08890, 08896, 08520, 08520, 08525, 08534, 08540, 08542, 08543, 08550, 08550, 08560, 08561, 08601, 08602, 08603, 08604, 08605, 08606, 08607, 08608, 08609, 08610, 08611, 08618, 08619, 08620, 08625, 08628, 08629, 08638, 08648, 08650, 08690, 08691];
    /*New York City*/
    const newYorkLocations = ['Nearby organizations you can support and volunteer at are <a href="http://bronxriver.org/">Bronx River Alliance</a>', ' <a href="http://www.brooklynbirdclub.org/">Brooklyn Bird Club</a>', ' <a href="http://nycaudubon.org/">New York City Audubon Society</a>'];
    const newYork = '<div class="displayedresult">It looks like you live in <div class="location">New York City</div>. Here are things near you.<div style="height:10px;margin-bottom:10px;border-bottom:1px solid #ccc"></div>';
    const newYorkSpecies = ['American Burying Beetle', ' Atlantic Ridley Sea Turtle', ' Dwarf Wedge Mussel', ' Karner Blue Butterfly', ' Piping Plover', ' Shortnose Sturgeon']
    const newYorkFacts = '<br><br>The <div class="location">' + newYorkSpecies + '</div> are federally endangered species near you. Keep an eye out for them and avoid disturbing/hunting/fishing for them.<br><img src="seaturtle.png" height=200px><div style="font-size:16px; display:inline;">The <div class="location">Atlantic Ridley sea turtle</div> is one of the most endangered species near you.</div>';
    const newYorkEvents = '<br><br>Upcoming events near you are <div class="location">Environmental Justice Conference EJC@TC</div> at the <div class="location">Columbia University</div> on <div class="location">April 1</div>.</div>';
    var newYorkCityZips = [10453, 10457, 10460, 10458, 10467, 10468, 10451, 10452, 10456, 10454, 10455, 10459, 10474,, 10463, 10471, 10466, 10469, 10470, 10475, 10461, 10462,10464, 10465, 10472, 10473, 11212, 11213, 11216, 11233, 11238, 11209, 11214, 11228, 11204, 11218, 11219, 11230, 11234, 11236, 11239, 11223, 11224, 11229, 11235, 11201, 11205, 11215, 11217, 11231, 11203, 11210, 11225, 11226, 11207, 11208, 11211, 11222, 11220, 11232, 11206, 11221, 11237, 10026, 10027, 10030, 10037, 10039, 10001, 10011, 10018, 10019, 10020, 10036, 10029, 10035,	10010, 10016, 10017, 10022, 10012, 10013, 10014, 10004, 10005, 10006, 10007, 10038, 10280, 10002, 10003, 10009,	10021, 10028, 10044, 10065, 10075, 10128, 10023, 10024, 10025, 10031, 10032, 10033, 10034, 10040, 11361, 11362, 11363, 11364, 11354, 11355, 11356, 11357, 11358, 11359, 11360, 11365, 11366, 11367, 11412, 11423, 11432, 11433, 11434, 11435, 11436, 11101, 11102, 11103, 11104, 11105, 11106, 11374, 11375, 11379, 11385, 11691, 11692, 11693, 11694, 11695, 11697, 11004, 11005, 11411, 11413, 11422, 11426, 11427, 11428, 11429,	11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11368, 11369, 11370, 11372, 11373, 11377, 11378, 10302, 10303, 10310, 10306, 10307, 10308, 10309, 10312, 10301, 10304, 10305, 10314]
    if (centralJerseyZips.includes(x)) {
    	document.getElementById('results').innerHTML = centralJersey + centralJerseyLocations + centralJerseyFacts + centralJerseyEvents;
    }
    else if (newYorkCityZips.includes(x)) {
    	document.getElementById('results').innerHTML = newYork + newYorkLocations + newYorkFacts + newYorkEvents;
    }
    else{
    	document.getElementById('results').innerHTML = '<div style="padding:20px;">Sorry, this site does not support your region yet.</div>';
    }
});

/*https://en.wikipedia.org/wiki/List_of_invasive_plant_species_in_New_Jersey*/