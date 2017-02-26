document.getElementById('submit').addEventListener('click', function() {
	var x = document.getElementById("myNumber").value;
	x = parseInt(x);
	const centralJerseyLocations = ['Nearby organizations you can support and volunteer at are <a href="http://thewatershed.org/">Stony Brook-Millstone Watershed</a>',' <a href="http://njconservation.org/index.cfm">NJ Conservation Organization</a>'];
    const centralJersey = '<div class="displayedresult">You live in <div class="location">Central Jersey</div>. Here are things near you.<div style="height:10px;margin-bottom:10px;border-bottom:1px solid #ccc"></div>';
    const centralJerseySpecies = ['Bald Eagle', ' Peregrine Falcon', " Mitchell's Satyr Butterfly", ' American Burying Beetle', ' Dwarf Wedge Mussel', ' Shortnose Sturgeon']
    const centralJerseyFacts = '<br><br>The <div class="location">' + centralJerseySpecies + '</div> are federally endangered species near you. Keep an eye out for them and avoid disturbing/hunting/fishing for them.<br><img src="baldeagle.png" height=200px><div style="font-size:16px; display:inline;">The <div class="location">bald eagle</div> is one of the most endangered species near you.</div></div>';
    var centralJerseyZips = [07059, 07069, 07920, 07921, 07924, 07931, 07934, 07938, 07939, 07977, 07978, 08502, 08504, 08528, 08553, 08558, 08805, 08807, 08821, 08823, 08835, 08836, 08844, 08853, 08869, 08873, 08875, 08876, 08880, 08890, 08896];
    if (centralJerseyZips.includes(x)) {
    	document.getElementById('results').innerHTML = centralJersey + centralJerseyLocations + centralJerseyFacts;
    }
});