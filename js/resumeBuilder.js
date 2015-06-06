var d = new Date();

var bio = {
	"name": "Robert Crocker",
	"role": "Data Visualizaton Consultant",
	"contacts": {
		"mobile": "(901) 634-8275",
		"email": "rcorcker13@gmail.com",
		"github": "rcrocker13",
		"twitter": "robcrock",
		"blog": "tumblr.robmakesgraphs.com",
		"location": "San Francisco, CA"
	},
	"welcomeMessage": "Welcome! Have a look around. Hope you like what you see.",
	"skills": ["Tableau", "SQL", "Data Visualization", "R", "Statistics"],
	"biopic": "http://38.media.tumblr.com/avatar_e01862678991_128.png",
	"display": function() {}
}

var work = {
	"jobs" : [
		{
			"employer": "Georgia-Pacific",
			"title": "Supply Chain Optimization Analyst",
			"location": "Atlanta, GA",
			"dates" : "Nov. 2011 - Apr. 2014",
			"description" : "Spearheaded Dixie® load utilization project, resulting in savings of $40K annually. Improved the accuracy of GP’s network optimization models 5%(>100K cases depending on the scenario) by identifying misallocated resource capacity in the ETL process feeding our JDA Linear modeler. Developed a process to transform GP’s network model output into a network graph clearly visualizing distribution lanes overlapping one another. Also, Piloted bi-weekly Excel training class over two semesters of Supply Chain interns resulting improved productivity and awareness."
		},
		{
			"employer": "Georgia-Pacific",
			"title": "Business Intelligence Developer",
			"location": "Atlanta, GA",
			"dates" : "Apr. 2014 - Dec. 2014",
			"description" : "Played a key role in initiating the first Enterprise Tableau Server Project at Georgia-Pacific by demonstrating improved flexibility, richness of dashboard offerings and reduced development hours over current dashboard solution. Created PowerPivot reference material based on the Industrial Wood Products division’s business scenario, not only solvign their problems but also educating their users on how to create their own PowerPivot models. Proactively partnered with internal clients by participating at their meeting or setting up time to shadow them resulting in multiple projects, enhancements and/or opportunity to demonstrate IT's solutions. Co-founded the GPtug user group in order to cultivate a community welcoming news users and inspiring those more advanced."
		},
		{
			"employer": "Slalom Consulting",
			"title": "Consultant",
			"location": "San Francisco, CA",
			"dates" : "Jan. 2015 - " + d.toDateString(),
			"description" : "Work as Tableau consultant at client sites where I stand up new Tableau Server instances, improve the perfomance of existing instances and also building insightful dashboards. I see myself as not only a consultant working for our clients, but also an evangelist in the community. I seek to engage with new and existing Tableau users. Both those looking to push the bounds of the application and also those new to Tableau seeking for guidance."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": 'Atlanta Budget Explorer',
			"dates": 'Dec. 2013',
			"description": "After winning the 2nd annual Atlanta Govathon, my team was sponsored to build a website increasing the Transparency of governement spending. My role on the team centered around creating the data pipeline as well as the interactive visualizations. The backend is a relational database transforming the government budge and expense data into a format to be easily visualized and interpreted by the citizens of Atlanta.",
			"images": "../images/AtlantaBudgetExplorer.png"
		},
		{
			"title": 'Advanced Data Visualization Newsletter',
			"dates": "Jan. 2015 - " + d.toDateString(),
			"description": "In an effort to engadege with my new community in the Bay Area and Slalom markets across around the world I started a newsletter. Ever month has been a different structure, but all are focused on eductating subscribers on deep topics within data visualzation. We have 60+ subscribers with an average click rate 10% greater than the industry average.",
			"images": "../images/DataVizNewsletter.png"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "The University of Tennessee",
			"location": "Knoxville, TN",
			"degree": "Bachelors of Science",
			"major": "Supply Chain / Logistics",
			"dates": 2011,
			"url": "http://www.utk.edu/"
		},
		{
			"name": "Universidad Internacional Menéndez Pelayo",
			"location": "Sevilla, Spain",
			"degree": "NA",
			"major": "Internationl Business",
			"dates": 2009,
			"url": "http://www.uimp.es/"
		}
		],
	"onlineCourses": [
		{
			"title": "Data Analysis with R",
			"school": "Udatcity",
			"date": 2014,
			"url": "https://www.udacity.com/course/data-analysis-with-r--ud651"
		},
		{
			"title": "Inferential Statistics",
			"school": "Udatcity",
			"date": 2014,
			"url": "https://www.udacity.com/course/intro-to-inferential-statistics--ud201"
		},
		{
			"title": "Intro to Operations Managment",
			"school": "Wharton",
			"date": 2013,
			"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?verify-code=4B3JELT2C7"
		},
		{
			"title": "Intro to Mathematical Thinking",
			"school": "Coursera",
			"date": 2012,
			"url": "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=176"
		}
		],
	"display": function() {}
};


// Below the elements are added to the DOM

// add title and role to the page
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

// append contact info
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
//var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGit);
$("#topContacts").append(formattedBlog);
//$("#contacts").append(formattedLocation);

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGit);
$("#footerContacts").append(formattedBlog);

// add bio pic and welcome message
var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(bioPic);

var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(welcome);


// append formatted skills to the page
if (bio.length != 0) {
 	$("#header").append(HTMLskillsStart);
 	for(skill in bio.skills) {
 		$("#header").append(HTMLskills.replace("%data%", bio.skills[skill]));
 	}
 } else {
 	console.log("No skills were found.")
 }


// add work related details
function displayWork() {
	for (job in work.jobs) {
	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	 	$("#workExperience").append(HTMLworkStart);
	 	$(".work-entry:last").append(formattedEmployerTitle);

	 	var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	 	$(".work-entry:last").append(formattedDate);

	 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


// add projects
function displayProjects() {
	for (project in projects.projects) {
	 	var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	 	var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	 	var projDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	 	var projImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

	 	$("#projects").append(HTMLprojectStart);
	 	$(".project-entry:last").append(projTitle);
		$(".project-entry:last").append(projDates);
		$(".project-entry:last").append(projDescription);
		$(".project-entry:last").append(projImage);
	}
}

displayProjects();


// add education
function displayEducation() {
	// add formal education
	for (school in education.schools) {
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name)
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
		var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major)

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(schoolName);
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
		var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
		var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date)
		var courseLocation = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)

		$("#education").append(HTMLonlineStart);
		$(".course-entry:last").append(courseTitle);
		$(".course-entry:last").append(courseSchool);
		$(".course-entry:last").append(courseDates);
		$(".course-entry:last").append(courseLocation);
	}
}

displayEducation();

// function returning a list of locations where I've worked
function locationizer(work) {
	var locations = [];
	for (var job in work.jobs) {
		var newLocation = work.jobs[job].location;
		workLocations.push(newLocation);
	}
	return locations;
};

// button converting names to international mode
function inName(name) {
  var nameArray = $("#name").text().split(" ");
  fName = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  lName = nameArray[1].toUpperCase();

  return fName + " " + lName;
};

$("#main").append(internationalizeButton);

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$("#mapDiv").append(googleMap);