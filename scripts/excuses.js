var excuse = []

excuse[0] = "My mom forgot the keys so I need to be home to open the door.";
excuse[1] = "Was up late studying and I'm too tired.";
excuse[2] = "My social battery is dead and needs recharging.";
excuse[3] = "I'm an introvert.";
excuse[4] = "Sorry, got stuck in some traffic and I won't be able to make it.";
excuse[5] = "No auto driver was ready to drop me at your location.";
excuse[6] = "Cab tyre got punctured so I had to find another cab and got late.";
excuse[7] = "Had lot of ice-cream and drinks last night so I am ill.";
excuse[8] = "It's not really my type of thing, you enjoy.";
excuse[9] = "I lost my keys.";
excuse[10] = "I have already made plans. Sorry";
excuse[11] = "I have a lot of work to do because I've been procrastinating a lot lately.";
excuse[12] = "Had some emergency so I'd to go.";
excuse[13] = "Family stuff came up.";
excuse[14] = "I have to attend a wedding.";
excuse[15] = "I had to attend someone's funeral.";
excuse[16] = "Have to run errands, I might not finish in time.";
excuse[17] = "Currently going through an existential crisis.";
excuse[18] = "I have cramps.";
excuse[19] = "I have mood swings.";
excuse[20] = "Have to take my pet out for a walk.";
excuse[21] = "Got the dates muddled up and I'm busy today.";
excuse[22] = "I had ordered something and I'm waiting for the delivery";
excuse[23] = "I'm really tired and totally exhausted.";
excuse[24] = "Can you come at my place? No? Then we are even.";
excuse[25] = "I'm staying in my house because my house is beautiful.";
excuse[26] = "I'm rich now.";
excuse[27] = "NO";
excuse[28] = "My dad is ill.";
excuse[29] = "My pet is sick.";
excuse[30] = "I've got to drop someone at the airport early morning tomorrow, sorry.";
excuse[31] = "I've period pains.";
excuse[32] = "I won't be coming today as my energy has been out of whack because Jupiter entered virgo. I won't be going out until I'm feeling more aligned. Astrological stuff, you can understand.";
excuse[33] = "I broke my little toe.";
excuse[34] = "I rolled out of my bed while sleeping and knocked myself out.";
excuse[35] = "I got confused with AM and PM while setting remainder so....";
excuse[36] = "My childhood friend came to meet me after years so I have to spend time.";
excuse[37] = "I have a new puppy and I need to play with him.";
excuse[38] = "I thought it was Saturday today";
excuse[39] = "I haven't bought new clothes in a while so I can't come.";
excuse[40] = "Theres a new movie coming that I want to watch.";
excuse[41] = "I'll be binge watching shows all day.";
excuse[42] = "I've a blocked nose.";
excuse[43] = "Don't have petrol in my vehicle";
excuse[44] = "A dog started chasing when I was on my way and I started running. And then I forgot my way.";
excuse[45] = "I'm pretty high right now.";
excuse[46] = "Have an appointment with my dentist.";
excuse[47] = "I'm having me time so I want to be alone.";
excuse[48] = "All my clothes are dirty.";
excuse[49] = "I forgot that we had plans";
excuse[50] = "I was up all night partying";
excuse[51] = "I'm having a bad hair day";
excuse[52] = "I was busy doing some other work so I forgot";
excuse[53] = "I'm self isolating";
excuse[54] = "I have to do my homework";
excuse[55] = "I was not in the mood to work";
excuse[56] = "I'm hibernating, maybe next season :)";
excuse[57] = "I'm focusing on something so no distractions";
excuse[58] = "I'm ghosting everyone";
excuse[59] = "I overslept";
excuse[60] = "I worked a lot so I took a nap.";
excuse[61] = "I can't come because weather is bad in my area";
excuse[62] = "I feel sick.";
excuse[63] = "My grandmother died.";
excuse[64] = "I just had a call from my neighbour that one of the water tap is open, and no one is at home so the house is flooded";
excuse[65] =  "I apologize for not completing the task on time. I underestimated the complexity and it took longer than expected.";
excuse[66] = "My parents won't allow me to come";
excuse[67] = "I'm volunteering for a wildlife observation project and need to log some data. So I won't be able to make it.";

function newExcuse() {
    var randomExcuse = Math.floor(Math.random()*(excuse.length));
    document.getElementById("pExcuse").innerHTML = excuse[randomExcuse];
}

$ (window).ready (function () {
	setTimeout (function () {
		$ ("#myModal").modal ("show")
	})

	$('[data-toggle="popover"]').popover({
		placement: 'bottom',
	}).on('shown.bs.popover', function () {
        setTimeout(function (a) {
            a.popover('hide');
        }, 2000, $(this));
    });

	$('[data-toggle="tooltip"]').tooltip({
		placement: 'bottom',
	})
});

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}
