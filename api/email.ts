// import getConfig from "next/config";
import emailjs from "@emailjs/browser";

type EmailType = {
	FirstName: string;
	LastName: string;
	Message: string;
	Email: string;
};

export const SendEmail = ({
	FirstName,
	LastName,
	Message,
	Email,
}: EmailType) => {
	const myEmail = process.env.NEXT_PUBLIC_MY_EMAIL as string;
	const TemplateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
	const ServiceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
	const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;

	console.log(myEmail);

	const EmailContent = {
		from_name: `${FirstName} ${LastName}`,
		to_name: "Ada",
		email_from: Email,
		message: Message,
		reply_to: myEmail,
	};

	(FirstName == "" && LastName == "") || Email == "" || Message == ""
		? alert("Please fill in all the fields!")
		: emailjs.send(ServiceID, TemplateID, EmailContent, publicKey).then(
				function (response) {
					alert("Your message has been sent successfully!");
				},

				function (error) {
					alert(
						`our message has been sent failed! \n Please contact me through ${myEmail} . `
					);
				}
		  );
};
