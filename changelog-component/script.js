const container = document.querySelector(".container")
const referenceNode = document.querySelector(".changelog-btn")

let changes = [
	{
		date: new Date("August 1, 2024"),
		changelog: "Changelog page to help you stay in the loop"
	},
	{
		date: new Date("August 10, 2024"),
		changelog: "Redis roadmap"
	},
		{
		date: new Date("August 15, 2024"),
		changelog: "Backend Project Ideas"
	},
	{
		date: new Date("August 22, 2024"),
		changelog: "Submit your project solution and get feedback"
	},
	{
		date: new Date("August 25, 2024"),
		changelog: "Git & GitHub roadmap"
	},
	{
		date: new Date("August 28, 2024"),
		changelog: "Build your learning habits with learning streaks"
	},
	{
		date: new Date("September 3, 2024"),
		changelog: "Announing Projects on Frontend Roadmap"
	}
]

function deployObjects() {
	changes.sort((a, b) => b.date.getTime() - a.date.getTime())

	for (const change of changes) {
		const monthList = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    	]

		const timelineItem = document.createElement("div");

		const timelineDate = document.createElement("div");
		const timelineDot = document.createElement("div");
		const timelineContent = document.createElement("div");

		container.insertBefore(timelineItem, referenceNode);
		timelineItem.classList.add("timeline-item");


		timelineItem.appendChild(timelineDate);
		timelineDate.classList.add("timeline-date");
		timelineDate.textContent = `${monthList[change.date.getMonth()]} 
		${change.date.getDate()}, ${change.date.getFullYear()}`

		timelineItem.appendChild(timelineDot)
		timelineDot.classList.add(`timeline-dot`);

		timelineItem.appendChild(timelineContent);
		timelineContent.classList.add("timeline-content");
		timelineContent.textContent = change.changelog;
	}
}

deployObjects()

