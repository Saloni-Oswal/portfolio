import { SectionTitle } from "@/sections/SectionTitle";

const EXPERIENCE = [
  {
    title: "Recent work and Freelancing",
    company_highlight:
      "Currently, I am freelancing on projects ranging from React Native prototypes to small-scale React dashboards, keeping pace with modern tooling (Vite, TailwindCSS, TypeScript).",
  },
  {
    title: "Senior Associate - Technology",
    company_name: "Synechron, Pune India",
    company_link: "https://www.synechron.com/",
    duration: "Jun'19 - Nov'22",
    company_highlight:
      "During my 3.5-year tenure at Synechron, in addition to my development responsibilities, I assumed supervisory roles that included leading and mentoring junior team members. I conducted comprehensive code reviews to maintain high code quality standards, ensure optimal performance, and align deliverables with project objectives.",
    projects: [
      {
        project_name: "Commercial banking application for HSBCNet",
        project_description:
          "HSBCNet is a commercial banking payments and transfers service providing customers online access to a suite of global and regional payment types. It allows customers to schedule or make instant payments through web. Customers can make cross currency payments, as well as bulk payments. Customers can also create payment templates in order to use them multiple times in the future.",
        project_details: [
          "Played a key role in the ongoing development and enhancement of server-driven UI banking web application, contributing to design and feature implementation",
          "Designed new, modular UI components to be used / documented in the in-house interactive pattern library using React Storybook",
          "Improved team efficiency by 25% by participating in sprint planning, backlog grooming, and retrospectives to prioritize tasks and refine requirements",
          "Involved in the migration of codebase from older DOJO technology to React",
        ],
      },
      {
        project_name: "Alias management application for HSBCNet",
        project_description:
          "Alias management is a platform that provides the ability to assign alternative names or identifiers to bank accounts, making it easier to identify them and manage payments. This functionality allows users to avoid using potentially cumbersome account numbers when making transactions or making it easier for others to send payments to specific accounts.",
        project_details: [
          "Extended the UI for an alias management system to support banking services in Hong Kong, Singapore and Malaysia",
          "Collaborated closely with cross-functional teams to deliver solutions that meet business objectives and user needs, increasing team efficiency",
          "Achieved 98% user accessibility by implementing WCAG 2.0 standards",
          "Refactored the entire codebase by implementing a responsive and cross browser compatible design",
        ],
      },
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Spring Computing Technologies, Pune, India",
    company_link: "https://springct.com/",
    duration: "Jan'16 - May'19",
    company_highlight:
      "During my 3.5-year tenure with Spring, I actively engaged in stakeholder meetings and collaborated on scope and design discussions. I played a pivotal role in decision-making processes, aiding in the selection of optimal design patterns and architectures for various projects. Additionally, I assumed leadership responsibilities within development teams and made significant contributions to the development of several Minimum Viable Products (MVPs) aimed at prospective clients, as well as worked independently to develop POCs.",
    projects: [
      {
        project_name: "Cross platform mobile application for Mobetize, Canada",
        project_description:
          "A mobile application that offers a payments solution allowing consumers to send international money transfers from their mobile devices seamlessly. It operates with third party exchange network which provides international remittance as a service. These vendors provide gateways to be used to process payments over the existing banking systems. The application supports four types of payments methods: Bank deposit, Cash pickup, Mobile wallet, Cash delivery.",
        project_details: [
          "Developed a cross-platform mobile application using React Native to build a payment transfer application which supported several payment methods",
          "The application involved development of multiple features for delivering a complete payment solution involving selection of payment type, validations for mobile numbers and zip codes around the world, handling of regulatory terms and condition screens as per destination country, display of past transactions list, etc.",
          "Delivered white-labelled mobile application for smartRemit and Ficanex, Canada which involved white labelling of application logo, colors, text styles and launch screen based on a configuration only change",
        ],
      },
      {
        project_name: "E-commerce application for UNIBEV Pepsiso, Kuwait",
        project_description:
          "An e-commerce web application for distributors to promote sales of an extensive range of PepsiCo products licensed for the Middle East amongst various wholesalers.",
        project_details: [
          "Developed a scalable e-commerce platform using React and Redux, allowing users to browse products, add them to the cart, and complete transactions securely",
          "Achieved 95% positive user feedback rate by implementing features like user authentication, product search, and dynamic filtering for an enhanced shopping experience",
          "Implemented google tag management to support analytics reporting and achieve desired business goals",
        ],
      },
      {
        project_name:
          "Cross platform mobile application for lawyers and users in Kuwait",
        project_description:
          "A platform for lawyer and user communication where a user can view lawyer profiles containing lawyer information and their reviews, send request to multiple lawyers for hiring with a short description and their desired fee, lawyers can either accept or reject the request, lawyers who accept the request can communicate with users via chat messages, users can then hire lawyers and make payment. The development involved nuanced feature handling like polling for facilitating message chats, payment gateway integration for making payments and role based login system architecture.",
        project_details: [
          "Developed a feature-rich mobile application leveraging React Native capabilities to implement complex UI components and navigational flows for optimal performance, ensuring a consistent user experience across iOS and Android platforms",
          "Enhanced app functionality and user engagement by 30% by integrating third-party APIs for functionalities such as push notifications and social media authentication",
          "Built a new design system / web services consumption architecture to provide consistency and maintainability",
        ],
      },
      {
        project_name: "Customizable Caption Styles for ConexED",
        project_description:
          "ConexED is a web based platform suited to meet the requirements of the universities and colleges for a cloud based appointment management platform and collaborative virtual meeting environment. It is a video meeting web based application that connects students with instructors, tutors and staff, easily allowing screen-sharing and other features to replicate an in-person office visit.",
        project_details: [
          "Designed and implemented a feature to display closed captions to users, also providing a way to customize caption styles, including font size, color, and background opacity, to cater to individual preferences and accessibility needs.",
          "Leveraged CSS for styling flexibility and dynamic updating of caption display settings, providing a visually appealing and customizable user experience",
          "Worked with peers to conduct usability testing for gathering feedback and iterated on caption styling options, ensuring optimal readability and consistent experience across varied devices and environments",
          "Actively participated in code reviews, knowledge sharing sessions, and continuous learning initiatives to foster a culture of collaboration and excellence within the development team",
        ],
      },
    ],
  },
];

export const Experience = () => {
  return (
    <section className='float-none break-words w-full mb-5 md:float-right md:mb-[60px]'>
      <SectionTitle title={"Experience"}></SectionTitle>
      <dl>
        {EXPERIENCE.map((company, index) => {
          const {
            title,
            company_link,
            company_name,
            duration,
            company_highlight,
            projects,
          } = company;
          return (
            <div key={index}>
              <dt className='text-base md:text-xl leading-6 mb-[5px]'>
                {`${title}${company_name ? `, ` : ""}`}
                <a href={company_link || "#"} target='_blank'>
                  {company_name}
                </a>
                {duration && `(${duration})`}
              </dt>
              <dd className='text-slate-400 text-sm md:text-base leading-[25.6px]'>
                <dl>
                  {projects &&
                    projects.map((project, index) => {
                      const {
                        project_name,
                        project_description,
                        project_details,
                      } = project;
                      return (
                        <div
                          key={index}
                          className='group p-[5px] rounded-[15px] md:p-[25px] transition-all duration-400 hover:bg-[rgba(45,212,191,0.1)]'
                        >
                          <dt className='text-slate-200 text-sm md:text-base mb-[5px] group-hover:text-teal-300 transition-all duration-400'>
                            {`${index + 1}. ${project_name}`}
                          </dt>
                          <dd>
                            {project_description}
                            <ul className='text-slate-200 mt-2.5 pl-0.5 md:pl-[17px] list-disc'>
                              {project_details.map((detail, index) => (
                                <li key={index} className='text-left'>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      );
                    })}
                </dl>
                <span className='text-slate-200 mt-[15px] inline-block'>
                  {company_highlight}
                </span>
              </dd>
              {EXPERIENCE.length - 1 > index && (
                <hr className='text-teal-300 h-px my-[15px] md:my-10' />
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
};
