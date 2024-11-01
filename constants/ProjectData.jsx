import Sticky_Cover from "./public/projects/Sticky_Notes/Cover.gif";
import Sticky_Fn1 from "./public/projects/Sticky_Notes/view.gif";
import Sticky_Fn2 from "./public/projects/Sticky_Notes/add.gif";
import Sticky_Fn3 from "./public/projects/Sticky_Notes/edit.gif";
import Sticky_Fn4 from "./public/projects/Sticky_Notes/delete.gif";
import Sticky_Fn5 from "./public/projects/Sticky_Notes/filter.gif";

import Asset_Fn1 from "./public/projects/Asset_Calculation/used.gif";
import Asset_Fn2 from "./public/projects/Asset_Calculation/newrecord.gif";
import Asset_Fn3 from "./public/projects/Asset_Calculation/delete.gif";
import Asset_Fn4 from "./public/projects/Asset_Calculation/display_delete.gif";
import Asset_Fn5 from "./public/projects/Asset_Calculation/graph.gif";
import Asset_Fn6 from "./public/projects/Asset_Calculation/filter.gif";
import Asset_Fn7 from "./public/projects/Asset_Calculation/calculate.gif";
import Asset_Fn8 from "./public/projects/Asset_Calculation/color.gif";

import Listen_Fn1 from "./public/projects/Listening_Split/open.gif";
import Listen_Fn2 from "./public/projects/Listening_Split/pause.gif";
import Listen_Fn3 from "./public/projects/Listening_Split/switch.gif";
import Listen_Fn4 from "./public/projects/Listening_Split/key.gif";

import Compare_Fn1 from "./public/projects/Media_Compare/UI.gif";
import Compare_Fn2 from "./public/projects/Media_Compare/showFolder.gif";
import Compare_Fn3 from "./public/projects/Media_Compare/submit.gif";
import Compare_Fn4 from "./public/projects/Media_Compare/copy.gif";
import Compare_Fn5 from "./public/projects/Media_Compare/check.gif";

import Ins_Fn1 from "./public/projects/IG_Multi_Media/sessionLogin.gif";
import Ins_Fn2 from "./public/projects/IG_Multi_Media/usepwLogin.gif";
import Ins_Fn3 from "./public/projects/IG_Multi_Media/inputcontent.gif";
import Ins_Fn4 from "./public/projects/IG_Multi_Media/tagUser.gif";
import Ins_Fn5 from "./public/projects/IG_Multi_Media/Preview.gif";
import Ins_Fn6 from "./public/projects/IG_Multi_Media/order.gif";
import Ins_Fn7 from "./public/projects/IG_Multi_Media/post.gif";
import Ins_Fn8 from "./public/projects/IG_Multi_Media/ins.gif";

import Money_F1 from "./public/projects/Money_App/addrecord.gif";
import Money_F2 from "./public/projects/Money_App/updaterecord.gif";
import Money_F3 from "./public/projects/Money_App/deleteRecord.gif";
import Money_F4 from "./public/projects/Money_App/addcate.gif";
import Money_F5 from "./public/projects/Money_App/enableCate.gif";
import Money_F6 from "./public/projects/Money_App/renameCate.gif";
import Money_F7 from "./public/projects/Money_App/chart.gif";
import Money_F8 from "./public/projects/Money_App/previewCalend.gif";
import Money_F9 from "./public/projects/Money_App/datefilter.gif";
import Money_F10 from "./public/projects/Money_App/addJob.gif";

const ProjectDetail = [
	{
		id: 1,
		Name: "Sticky Notes Editor",
		Introduction:
			"This is Sticky Notes Editor, The main function of this Project is to Create New Notes, Edit Current Notes, Delete unused Notes, Filter Notes by Category and Sub-Category.",
		GithubURL: "https://github.com/Adalaupy/Sticky_note_v2",
		TryMe: "https://adalaupy.github.io/Sticky_note_v2/",
		CoverPhoto: Sticky_Cover,
		tags: ["React", "HTML", "CSS", "JAVASCRIPT", "Python"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text: "Display All Your Sticky Notes ",
					Fn_Img: Sticky_Fn1,
				},
				{
					fn_ID: 2,
					Fn_Text: "Add New Sticky Notes",
					Fn_Img: Sticky_Fn2,
				},
				{
					fn_ID: 3,
					Fn_Text:
						"Double Click and Edit current existing Sticky Notes",
					Fn_Img: Sticky_Fn3,
				},
				{
					fn_ID: 4,
					Fn_Text: "Delete unused Sticky Notes",
					Fn_Img: Sticky_Fn4,
				},
				{
					fn_ID: 5,
					Fn_Text: "Filter Sticky Notes by Category and Sub-Category",
					Fn_Img: Sticky_Fn5,
				},
			],
			packages: [
				"react-rte",
				"react-html-parser",
				"react-icons",
				"FastAPI",
				"uvicorn",
			],
			challenge_improvement: [
				"UI design",
				"More Text Editor Function, e.g. highlight, bold font",
				"Storage Method of Sticky Notes Content (Currently using Json file in Local Storage)",
			],
		},
	},
	{
		id: 2,
		Name: "Asset Calculation",
		Introduction:
			"This is Asset Calculation, This Project is created in hope of providing a general overview of my asset as well as keeping a historical financial record, the data and the corresponding charts can be displayed in an HTML page, which also allows us to input some new records, of course you can update and delete records as well",
		TryMe: "https://adalaupy.github.io/Asset_Calculation_v2/",
		GithubURL: "https://github.com/Adalaupy/Asset_Calculation_v2/tree/v2",
		CoverPhoto: Asset_Fn1,
		tags: ["React", "HTML", "CSS", "JAVASCRIPT"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text: "Hide unused element",
					Fn_Img: Asset_Fn1,
				},
				{
					fn_ID: 2,
					Fn_Text:
						"Create New Record and exchange other currency to HKD",
					Fn_Img: Asset_Fn2,
				},
				{
					fn_ID: 3,
					Fn_Text: "Delete Record",
					Fn_Img: Asset_Fn3,
				},
				{
					fn_ID: 4,
					Fn_Text: "Display all Record",
					Fn_Img: Asset_Fn4,
				},
				{
					fn_ID: 5,
					Fn_Text:
						"Observe the change of your finanical status by Chart",
					Fn_Img: Asset_Fn5,
				},
				{
					fn_ID: 6,
					Fn_Text:
						"Filter out record by YearMonth, Source and Asset Type",
					Fn_Img: Asset_Fn6,
				},
				{
					fn_ID: 7,
					Fn_Text: "Calculate your Asset, Liability and Capital",
					Fn_Img: Asset_Fn7,
				},
				{
					fn_ID: 8,
					Fn_Text: "Pick Theme Color by color picker",
					Fn_Img: Asset_Fn8,
				},
			],
			packages: [
				"@mui/material @emotion/react @emotion/styled",
				"dayjs",
				"@mui/x-date-pickers",
				"@mui/x-data-grid",
				"@mui/x-charts",
				"mui-color-input",
				"@mui/icons-material",
				"@mui/x-data-grid-generator",
			],
			challenge_improvement: [
				"Export to Excel Function",
				"UI design",
				"More Filter Options",
				"Exchange for other currency",
				"Only Single Selection accepted for Filters",
				"More Columns for each Record",
			],
		},
	},
	{
		id: 3,
		Name: "Listening Practice Tool",
		Introduction:
			"Listening is important for learning a new language, personally speaking, I like to practice it by my playing video on Youtube and use notepad to mark down what I have listened. But in most case, it's quite hard to follow the speed of the video and forced to drag the mouse pointer from notepad to my browser to press a 'stop' button or seek backward, and vice versa to continue. This program is designed for consolidating these several actions into just one step and enhancing your listening practicing efficiency.",
		GithubURL: "https://github.com/Adalaupy/listening_practice_split",
		CoverPhoto: Listen_Fn2,
		tags: ["Python"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text:
						"In case you have multiple monitors, you can click on it and a browser and notepad file will automatically pop up on the selected screen",
					Fn_Img: Listen_Fn1,
				},
				{
					fn_ID: 2,
					Fn_Text:
						"Press 'pause' on the keyboard and the video will be paused, the pointer is still on the notepad file, so you can continue to type , press 'pause' again to resume.",
					Fn_Img: Listen_Fn2,
				},
				{
					fn_ID: 3,
					Fn_Text:
						"Press 'PrtSc' on the keyboard to switch the window among browser and notepad file, so you can seek backward without dragging the mouse pointer.",
					Fn_Img: Listen_Fn3,
				},
				{
					fn_ID: 4,
					Fn_Text:
						"You can choose other keys to 'pause' and 'switch' the window.",
					Fn_Img: Listen_Fn4,
				},
			],
			packages: [
				"keyboard",
				"win32gui",
				"win32com.client",
				"win32con",
				"win32api",
				"pynput",
				"subprocess",
				"screeninfo",
				"time",
			],
			challenge_improvement: [
				"You can only choose another keys through the code, not through the GUI",
				"The video player must accept 'space' to pause like Youtube, otherwise the pause function may not work",
				"Only accept Google Chrome and Notepad, other browser and text editor may not work",
			],
		},
	},
	{
		id: 4,
		Name: "Folder Media Comparison",
		Introduction:
			"This project is created for media transfer across different folders, despite the change of the file name, this program can identify whether the items from source folders are already migrated to destination folder by comparing the content inside, if not exists, the files will be automatically transfer to source folder. Multiple Source path and destination path is allowed for each run.",
		GithubURL: "https://github.com/Adalaupy/folder_media_compare",
		CoverPhoto: Compare_Fn3,
		tags: ["Python"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text:
						"Tkinter UI to submit the source and destination path, Multiple Source path and destination path is allowed.",
					Fn_Img: Compare_Fn1,
				},
				{
					fn_ID: 2,
					Fn_Text:
						"We got 2 source folders and 2 destination folders, which some of files already exists in destination folder.",
					Fn_Img: Compare_Fn2,
				},
				{
					fn_ID: 3,
					Fn_Text:
						"Press 'submit' in the Tkinter UI once ready and the program start.",
					Fn_Img: Compare_Fn3,
				},
				{
					fn_ID: 4,
					Fn_Text:
						"the program start to compare the files inside the source folders and destination folders, and identity the duplications even with different file name, and copy the new files to the 1st Destination folder, and the 2nd Destination folder by default",
					Fn_Img: Compare_Fn4,
				},
				{
					fn_ID: 5,
					Fn_Text:
						"the program will not re-copy the files that already exists in the destination folders.",
					Fn_Img: Compare_Fn5,
				},
			],
			packages: [
				"tkinter",
				"glob",
				"os",
				"PIL",
				"moviepy.editor",
				"shutil",
				"io",
			],
			challenge_improvement: [
				"Performance and speed of the program is uncertain when the number of files is large.",
				"Tkinter UI is not responsive when the size changed.",
				"Limited file types",
				"Accepted Image Types - '.jpg', '.jpeg', '.png', '.bmp' , '*.gif'",
				"Accepted Video Types - ''.mp4', '.avi', '.mkv', '.mov' ",
				"Folder path have to input manually",
			],
		},
	},
	{
		id: 5,
		Name: "Instagram Media Resize",
		Introduction:
			"Instagram allow users to upload multiple media at once for each post, however, the photos are automatically cropped if the aspect ratio of them are not consistent. To advoid cropping on Instagram, users have to make sure that all the media that they upload are in the union aspect ratio, or they may resize the photo by using some thrid-party app which take some times to do it. The main purpose of this project is to facilitate the resizing and uploading process. After login, user can choose the photos/video that they need to upload for the same post, this application will automatically resize the photos and video and post them without any cropping.",
		TryMe: "https://adalaupy.github.io/IG_multi_Media_v2/",
		GithubURL: "https://github.com/Adalaupy/IG_multi_Media_v2",
		CoverPhoto: Ins_Fn5,
		tags: ["React", "HTML", "CSS", "JAVASCRIPT", "Python"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text:
						"Find your previous login record and login automatically",
					Fn_Img: Ins_Fn1,
				},
				{
					fn_ID: 2,
					Fn_Text:
						"If no login session history record, you can login manually",
					Fn_Img: Ins_Fn2,
				},
				{
					fn_ID: 3,
					Fn_Text: "Input Captins, Hashtags, and Media for the post",
					Fn_Img: Ins_Fn3,
				},
				{
					fn_ID: 4,
					Fn_Text:
						"Tag Other Users on specific position of the photo (Only the 1st one)",
					Fn_Img: Ins_Fn4,
				},
				{
					fn_ID: 5,
					Fn_Text:
						"When Press 'Preview', the photos will be resized and shown in the preview area with the caption and hashtags",
					Fn_Img: Ins_Fn5,
				},
				{
					fn_ID: 6,
					Fn_Text:
						"You can re-arrage the order of the photos by drag and drop",
					Fn_Img: Ins_Fn6,
				},
				{
					fn_ID: 7,
					Fn_Text:
						"Once ready, press 'Post' to post the photos and video to Instagram",
					Fn_Img: Ins_Fn7,
				},
				{
					fn_ID: 8,
					Fn_Text: "Result as shown",
					Fn_Img: Ins_Fn8,
				},
			],
			packages: [
				"fastapi",
				"uvicorn",
				"Pillow",
				"moviepy",
				"python-multipart",
			],
			challenge_improvement: [
				"Limited file types, e.g. svg is not supported",
				"UI design",
				"Only Support Posting but not Story",
				"Tagged Users are not shown in Preview",
				"If one Vertical orientation photo exists, all the photos will be resized to Vertical orientation",
			],
		},
	},
	{
		id: 6,
		Name: "Money App",
		Introduction:
			"This is my first React Native Project (Expo) after I watched some tutorial from Youtube. This App is used for tracking my daily spending and income, besides input the records mannually, it also allows users to set some schedule so that the expense/income will be automatically recorded, this App allow users to do some simple customization such as adding their own Expense category.",
		GithubURL: "https://github.com/Adalaupy/MoneyApp",
		CoverPhoto: Money_F8,
		tags: ["React", "React Native", "Expo", "JAVASCRIPT", "HTML"],
		detail: {
			function: [
				{
					fn_ID: 1,
					Fn_Text: "Input your own Expense / Income",
					Fn_Img: Money_F1,
				},
				{
					fn_ID: 2,
					Fn_Text: "Edit your entered Expense / Income",
					Fn_Img: Money_F2,
				},
				{
					fn_ID: 3,
					Fn_Text: "Delete your entered Expense / Income",
					Fn_Img: Money_F3,
				},

				{
					fn_ID: 4,
					Fn_Text: "Customize your own cateogry by adding new one",
					Fn_Img: Money_F4,
				},
				{
					fn_ID: 5,
					Fn_Text:
						"Customize your own cateogry by enabling/disabling current one",
					Fn_Img: Money_F5,
				},
				{
					fn_ID: 6,
					Fn_Text: "Long Press the Current category and rename it ",
					Fn_Img: Money_F6,
				},
				{
					fn_ID: 7,
					Fn_Text:
						"summarize your financial situation by chart for different time period",
					Fn_Img: Money_F7,
				},
				{
					fn_ID: 8,
					Fn_Text:
						"Check your previous Records in both Calendar and List",
					Fn_Img: Money_F8,
				},
				{
					fn_ID: 9,
					Fn_Text: "You can filter out your records by date",
					Fn_Img: Money_F9,
				},
				{
					fn_ID: 10,
					Fn_Text:
						"set scheduled Income/Expense e.g. salary, for automatic input",
					Fn_Img: Money_F10,
				},
			],
			packages: [
				"@react-native-community/datetimepicker",
				"react-native-calendars",
				"react-native-chart-kit",
				"react-native-dropdown-picker",
				"react-native-modal-selector",
			],
			challenge_improvement: [
				"UI design",
				"only fundamental functions provided",
			],
		},
	},
];

export default ProjectDetail;
