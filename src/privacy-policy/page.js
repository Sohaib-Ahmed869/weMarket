import React from "react";
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar1 from "../layout/Navbar";
import Footer from "../layout/Footer";

import elipse from '../assets/images/home/Ellipse.png'

const PrivacyPage = () => {
    return (
        <div>
            <Navbar1 />
            <div className="section home-3" id="home" style={{ background: "", fontWeight: 'bold' }}>

                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col md={12}>
                            <div className="home-heading">
                                <img src={elipse} alt="" className="img-fluid" />
                                <h4 className="home-title">Privacy Policy</h4>
                                <p className="text-muted">Last updated November 03, 2023</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <p>This privacy notice for wemarketyousell LLC ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
                            <ul>
                                <li>Visit our website at https://wemarketyousell.com, or any website of ours that links to this privacy notice</li>
                                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                            </ul>

                            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at admin@wemarketyousell.com.
                        </p>
                    </Row>

                    <Row className="align-items-center justify-content-between">
                        <h1>SUMMARY OF KEY POINTS</h1>
                        <p>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                            <br></br>
                            <br></br>
                            What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                            <br></br> <br></br>
                            Do we process any sensitive personal information? We do not process sensitive personal information.
                            <br></br> <br></br>
                            Do we receive any information from third parties? We do not receive any information from third parties.
                            <br></br> <br></br>
                            How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.
                            <br></br> <br></br>
                            In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Learn more about when and with whom we share your personal information.
                            <br></br> <br></br>
                            How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.
                            <br></br> <br></br>
                            What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.
                            <br></br> <br></br>
                            How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                            <br></br> <br></br>
                            Want to learn more about what we do with any information we collect? Review the privacy notice in full.
                        </p>
                    </Row>

                    <Row className="align-items-center justify-content-between">
                        <div>
                            <ol style={{ color: '#00E5CC' }}>
                                <li>WHAT INFORMATION DO WE COLLECT?</li>
                                <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                                <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                                <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
                                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                                <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                                <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                                <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                            </ol>
                        </div>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>1. WHAT INFORMATION DO WE COLLECT?</h4>
                        <p>
                            Personal information you disclose to us
                            <br></br> <br></br>
                            In Short: We collect personal information that you provide to us.
                            <br></br> <br></br>
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                            <br></br> <br></br>
                            Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                            names
                            phone numbers
                            email addresses
                            mailing addresses
                            job titles
                            contact preferences
                            contact or authentication data
                            billing addresses
                            debit/credit card numbers
                            Sensitive Information. We do not process sensitive information.
                            <br></br> <br></br>
                            Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
                            <br></br> <br></br>
                            All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
                            <br></br> <br></br>
                            Information automatically collected
                            <br></br> <br></br>
                            In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
                            <br></br> <br></br>
                            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
                            <br></br> <br></br>
                            Like many businesses, we also collect information through cookies and similar technologies.
                            <br></br> <br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>2. HOW DO WE PROCESS YOUR INFORMATION?</h4>
                        <p>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                            <br></br><br></br>
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

                            <ul>
                                <li>   To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                                <li>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.</li>
                                <li>To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</li>
                                <li>To comply with our legal obligations. We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</li>
                            </ul>
                        </p>

                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4>
                        <p>
                            In Short: We may share information in specific situations described in this section and/or with the following third parties.
                            <br></br><br></br>
                            We may need to share your personal information in the following situations:
                            <ul>
                                <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                <li>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below.</li>
                                <li>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                                <li>Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                            </ul>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>
                        <p>
                            In Short: We may use cookies and other tracking technologies to collect and store your information.
                            <br></br><br></br>
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h4>
                        <p>
                            In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
                            <br></br><br></br>
                            Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
                            <br></br><br></br>
                            We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h4>
                        <p>
                            In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
                            <br></br><br></br>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                            <br></br><br></br>
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h4>
                        <p>
                            In Short: We aim to protect your personal information through a system of organizational and technical security measures.
                            <br></br><br></br>
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>8. DO WE COLLECT INFORMATION FROM MINORS?</h4>
                        <p>
                            In Short: We do not knowingly collect data from or market to children under 18 years of age.
                            <br></br><br></br>
                            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at __________.
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>9. WHAT ARE YOUR PRIVACY RIGHTS?</h4>
                        <p>
                            In Short: You may review, change, or terminate your account at any time.
                            <br></br><br></br>
                            Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                            <br></br><br></br>
                            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
                            <br></br><br></br>
                            Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
                            <br></br><br></br>
                            If you have questions or comments about your privacy rights, you may email us at admin@wemarketyousell.com.
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>
                            10. CONTROLS FOR DO-NOT-TRACK FEATURES</h4>
                        <p>
                            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.

                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>
                            11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h4>
                        <p>
                            In Short: If you are a resident of , you are granted specific rights regarding access to your personal information.
                            <br></br><br></br>
                            What categories of personal information do we collect?
                            <br></br><br></br>
                            We have collected the following categories of personal information in the past twelve (12) months:
                            <br></br><br></br>
                            CategoryExamplesCollected
                            A. Identifiers
                            Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name
                            <br></br><br></br>
                            YES
                            <br></br><br></br>
                            B. Protected classification characteristics under state or federal law
                            Gender and date of birth
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            C. Commercial information
                            Transaction information, purchase history, financial details, and payment information
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            D. Biometric information
                            Fingerprints and voiceprints
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            E. Internet or other similar network activity
                            Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements
                            <br></br><br></br>
                            YES
                            <br></br><br></br>
                            F. Geolocation data
                            Device location
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            G. Audio, electronic, visual, thermal, olfactory, or similar information
                            Images and audio, video or call recordings created in connection with our business activities
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            H. Professional or employment-related information
                            Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us
                            <br></br><br></br>
                            YES
                            <br></br><br></br>
                            I. Education Information
                            Student records and directory information
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            J. Inferences drawn from collected personal information
                            Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics
                            <br></br><br></br>
                            NO
                            <br></br><br></br>
                            K. Sensitive personal Information
                            <br></br><br></br>
                            NO

                            <br></br><br></br>
                            We will use and retain the collected personal information as needed to provide the Services or for:
                            <ul>
                            <li>Category A - As long as the user has an account with us</li>
                            <li>Category E - As long as the user has an account with us</li>
                            <li>Category H - As long as the user has an account with us</li>
                            </ul>
                            We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                            <li> Receiving help through our customer support channels;</li>
                            <li> Participation in customer surveys or contests; and</li>
                            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                            How do we use and share your personal information?
                            <br></br><br></br>
                            Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"
                            <br></br><br></br>
                            Will your information be shared with anyone else?
                            <br></br><br></br>
                            We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
                            <br></br><br></br>
                            We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.
                            <br></br><br></br>
                            We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.

                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>
                            12. DO WE MAKE UPDATES TO THIS NOTICE?</h4>
                        <p>
                            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
                            <br></br><br></br>
                            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>
                            13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h4>
                        <p>

                            If you have questions or comments about this notice, you may contact us by post at:
                            <br></br><br></br>
                            wemarketyousell LLC<br></br>
                            823 S Highland Dr, Hollywood, FL 33021, USA<br></br>
                            Hollywood, FL 33021<br></br>
                            United States<br></br>
                            <br></br><br></br>
                        </p>
                    </Row>
                    <Row className="align-items-center justify-content-between">
                        <h4>
                            14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h4>
                        <p>
                            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.
                            This privacy policy was created using Termly's Privacy Policy Generator.
                            <br></br><br></br>
                        </p>
                    </Row>
                </Container>

            </div>
            <Footer />
        </div >
    )
}

export default PrivacyPage;