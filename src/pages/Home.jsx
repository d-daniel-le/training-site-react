import { useState } from 'react'
import './Home.css'

function HomePage () {
    const [service, setService] = useState("Select a Service")
    //Enrollment State
    const [enrollmentServices, setEnrollmentServices] = useState("Select a Service")
    const [proofOfIdResult, setProofOfIdResult] = useState("Select An Answer")
    const [enrollInClasses, setEnrollInClasses] = useState("Select An Answer")
    const [newStudentQuestions, setNewStudentQuestions] = useState("Select An Answer")
    const [transcriptType, setTranscriptType] = useState("Select An Answer")
    const [missingClasses, setMissingClasses] = useState("Select An Answer")
    const [waiver, setWaiver] = useState("Select An Answer")
    //Financial Aid
    const [financialAid, setFinancialAid] = useState("Select a Service")
    // Evaluation and Graduation
    const [evalGrad, setEvalGrad] = useState("Select a Service")
    const [genEvalType, setGenEvalType] = useState("Select an Answer")
    // Placement and Testing
    const [placeTest, setPlaceTest] = useState("Select a Service")
    // Welcome Center
    const [welcomeCenter, setWelcomeCenter] = useState("Select a Service")
    const [appointmentQuestion, setAppointmentQuestion] = useState("Select An Answer")
    // Student Financial Services
    const [sfs, setSfs] = useState("Select a Service")
    

    return(
        <div className="homepage-container">
            <div className="input-container">
                <h2>What Services are you looking for today?</h2>
                {/* <input type="text" placeholder="Please ENTER the service that you are looking for here"/> */}
                
                <select name="main-services" id="service" value={service} onChange={(e) =>{
                    setService(e.target.value)
                    setEnrollmentServices("Select a Service")
                    setFinancialAid("Select a Service")
                    setWaiver("Select An Answer")
                    setEvalGrad("Select a Service")
                    setGenEvalType("Select an Answer")
                    setPlaceTest("Select a Service")
                    setWelcomeCenter("Select a Service")
                    setSfs("Select a Service")
                }}>
                    <option value="Select a Service" selected>Select a Service</option>
                    <option value="Enrollment Services">Enrollment Services</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Evaluations and Graduation">Evaluations and Graduation</option>
                    <option value="Placement and Testing">Placement and Testing</option>
                    <option value="Welcome Center">Welcome Center</option>
                    <option value="Student Financial Services">Student Financial Services</option>
                </select>
            </div>

            {/* follow-up questions 1*/}
            {service !== "Select a Service" && (
                    <div className='result-container' id='enrollment'>
                        <h2>{service}</h2>
                        {
                            service === "Select a Service" && (
                                setService("Select a Service"),
                                setEnrollmentServices("Select a Service"),
                                setWaiver("Select An Answer")
                                
                            )
                        }
                        
                        {
                            service === "Enrollment Services" && (
                                <select name="enrollment-service" className='result-service' id="enrollment-service" value={enrollmentServices} onChange={(e)=>{
                                    setEnrollmentServices(e.target.value)
                                    setProofOfIdResult("Select An Answer")
                                    setNewStudentQuestions("Select An Answer")
                                    setTranscriptType("Select An Answer")
                                    setMissingClasses("Select An Answer")
                                    setWaiver("Select An Answer")
                                    setEvalGrad("Select a Service")
                                    }}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="Proof of ID">Proof of ID</option>
                                    <option value="Enroll in classes">Enroll in classes</option>
                                    <option value="Transcript-related Questions">Transcript-related Questions</option>
                                    <option value="Update Personal Information (SSN, W-9S form)">Update Personal Information (SSN, W-9S form)</option>
                                    <option value="Classes are not showing up">Classes are not showing up</option>
                                    <option value="DRNP (Drop For Non-Payment)">DRNP (Drop For Non-Payment)</option>
                                    <option value="Verification Letter of Enrollment">Verification Letter of Enrollment</option>
                                    <option value="Running Start">Running Start</option>
                                    <option value="Waiver">Waiver</option>
                                    <option value="Residency">Residency</option>
                                </select>        
                            )
                        }

                        {
                            service === "Financial Aid" && (
                                <select name="financial-aid" className='result-service' id="financial-aid" value={financialAid} onChange={(e) => {setFinancialAid(e.target.value)}}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="FAFSA">FAFSA</option>
                                    <option value="WASFA">WASFA</option>
                                    <option value="Documents">Documents</option>
                                    <option value="Bank Mobile / Bank Mobile Refund">Bank Mobile / Bank Mobile Refund</option>
                                    <option value="Scholarship">Scholarship</option>
                                    <option value="Proof of Citizenship">Proof of Citizenship</option>
                                </select>
                            )
                        }

                        {
                            service === "Evaluations and Graduation" && (
                                <select name="evaluation-graduation" className='result-service' id="evaluation-graduation" onChange={(e) => {setEvalGrad(e.target.value)}}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="General Graduation Questions">General Graduation Questions</option>
                                    <option value="Official Transcripts sent from another college">Official Transcripts sent from another college</option>
                                    <option value="Transfer Credit Processing Status">Transfer Credit Processing Status</option>
                                    <option value="Graduation Application">Graduation Application</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Look over the transcript before applying">Look over the transcript before applying</option>
                                </select>
                            )
                        }

                        {
                            service === "Placement and Testing" && (
                                <select name="placement-testing" className='result-service' id="placement-testing" onChange={(e) => {setPlaceTest(e.target.value)}}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="Testing Appointment">Testing Appointment</option>
                                    <option value="Unofficial transcript evaluation">Unofficial transcript</option>
                                    <option value="Proctored Test for other schools">Proctored Test for other schools</option>
                                </select>
                            )
                        }

                        {
                            service === "Welcome Center" && (
                                <select name="welcome-center" className='result-service' id="welcome-center" onChange={(e)=> {setWelcomeCenter(e.target.value)}}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="Do they have an appointment?">Do they have an appointment?</option>
                                    <option value="Campus Tour">Campus Tour</option>
                                </select>
                            )
                        }

                        {
                            service === "Student Financial Services" && (
                                <select name="cashier" className='result-service' id="cashier" onChange={(e) => {setSfs(e.target.value)}}>
                                    <option value="Select a Service" selected>Select a Service</option>
                                    <option value="Make a Payment">Make a Payment</option>
                                    <option value="Payment Plan">Payment Plan</option>
                                    <option value="ORCA Card Pick-up">ORCA Card Pick-up</option>
                                    <option value="College Fund - GET Plan">College Fund - GET Plan</option>
                                    <option value="Payment Receipt/Invoices">Payment Receipt/Invoices</option>
                                    <option value="Account Charges">Account Charges</option>
                                    <option value="3rd-party Payment">3rd-party Payment</option>
                                </select>
                            )
                        }
                        
                </div>            
            )}

            {/* Enrollment Services */}
            {
                service !== "Select a Service" && enrollmentServices === "Proof of ID" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        <p>NOTE: At times, even though they have applied for FAFSA, they might still be asked to verify their identity by Enrollment Services. Make sure to have them check the email that they got or check their ctcLink if they say it is on their ctcLink or they have a hold.</p>
                        <h3>Is it for Enrollment Services or Financial Aid?</h3>
                        <select name="clarify-questions" id="enrollment-questions" onChange={(e)=>{
                            setProofOfIdResult(e.target.value)
                        }}>
                            <option value="Select An Answer" selected>Select an Answer</option>
                            <option value="Enrollment Services">Enrollment Services</option>
                            <option value="Financial Aid">Financial Aid</option>
                        </select>

                        {
                            proofOfIdResult !== "Select An Answer" && (
                                <>
                                    <h5>Solution:</h5>
                                
                                    {
                                        proofOfIdResult === "Enrollment Services" && (
                                            <p>Check them in the queue for Enrollment Services</p>
                                        )
                                    }

                                    {
                                        proofOfIdResult === "Financial Aid" && (
                                            <p>Check them in the queue for Financial Aid</p>
                                        )
                                    }
                                </>
                                
                                
                            )
                        }
                    </div>
                )
            }
            {
                service !== "Select a Service" && enrollmentServices === "Enroll in classes" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        <h3>What type of students are they?</h3>
                        <select name="clarify-questions" id="enrollment-questions" onChange={(e)=>{
                            setEnrollInClasses(e.target.value)
                            setNewStudentQuestions("Select An Answer")
                        }}>
                            <option value="Select An Answer" selected>Select an Answer</option>
                            <option value="New Student">New Student</option>
                            <option value="Current Student">Current Student</option>
                            <option value="Prospective Student">Prospective Student</option>
                        </select>

                        {
                            enrollInClasses !== "Select An Answer" && (
                                <>
                                    <h5>Solution:</h5>
                                
                                    {
                                        enrollInClasses === "New Student" && (
                                            <select name="New Student Questions" id="new-student-questions" onChange={(e)=>{
                                                setNewStudentQuestions(e.target.value)
                                            }}>
                                                <option value="Select An Answer" selected>Select an Answer</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        )
                                        
                                    }
                                    {
                                            newStudentQuestions !== "Select An Answer" && (
                                                <>
                                                    {
                                                        newStudentQuestions === "Yes" && (
                                                            <p>
                                                                If they know what classes to take, Show them how to register on ctcLink using the Mobile site.
                                                                <br/>
                                                                <br/>
                                                                If they don't know Set them up with academic advising, either drop in or schedule an appointment.
                                                            </p>
                                                        )
                                                    }
                                                    {
                                                        newStudentQuestions === "No" && (
                                                            <p>If not, then make sure they complete them before they can speak with academic advising</p>
                                                        )
                                                    }
                                                </>
                                            )
                                        }

                                    {
                                        enrollInClasses === "Current Student" && (
                                            <p>Ask the student to show the error to see where the problem is. Proceed with the appropriate services that you know.</p>
                                        )
                                    }
                                    {
                                        enrollInClasses === "Prospective Student" && (
                                            <p>
                                                If prospective students, or returning students after 2 years or more, please guide them through the admission process to reapply. They can also come for the drop-in admission advising.
                                                <br/>
                                                <br/>
                                                If they are a returning student who was here within the last 2 years, have them fill out the term activation form.
                                            </p>
                                        )
                                    }                                    
                                </>
                                
                                
                            )
                        }
                    </div>
                )
            }
            {
                service !== "Select a Service" && enrollmentServices === "Transcript-related Questions" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        <h3>What kind of transcript are you looking for?</h3>
                        <select name="clarify-questions" id="transcript-questions" onChange={(e)=> {
                            setTranscriptType(e.target.value)
                        }}>
                            <option value="Select An Answer" selected>Select an Answer</option>
                            <option value="Unofficial Transcript">Unofficial Transcript</option>
                            <option value="Official Transcript">Official Transcript</option>
                        </select>

                        {
                            transcriptType !== "Select An Answer" && (
                                <>
                                    <h5>Solutions:</h5>
                                    <p>NOTE: This is only if they are asking about their transcript from Bellevue College. Review Placement and Testing for unofficial transcript related questions from another college related questions and Evaluation and Graduation for official transcript from another college related questions</p>
                                    {
                                        transcriptType === "Unofficial Transcript" && (
                                            <p>If the unofficial transcript, refer them back to ctcLink. If they did not have a CTCLink account when they were enrolled, check them into Enrollment Services (Miki can also print).</p>
                                        )
                                    }
                                    {
                                        transcriptType === "Official Transcript" && (
                                            <p>They can either request it online or in person. If they choose to get the transcript in-person, check the student into Enrollment Services</p>
                                        )
                                    }
                                    
                                </>
                            )
                        }
                    </div>
                )
            }
            {
                service !== "Select a Service" && enrollmentServices === "Update Personal Information (SSN, W-9S form)" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        <h5>Solutions:</h5>

                        <p>- Check them in line to the Enrollment Services (Refer to the Financial Aid section to check for additional questions regarding SSN.)</p>
                        <p>- If they want to just drop off their W-9 form, they can drop off the form at the Student Central drop box across the desk from us</p>
                        
                    </div>
                )
            }
            {
                service !== "Select a Service" && enrollmentServices === "Classes are not showing up" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h3>Where were the classes not showing up for the students?</h3>

                        <select name="missing classes" id="missing-classes" onChange={(e)=> {setMissingClasses(e.target.value)}}>
                            <option value="Select An Answer" selected>Select an Answer</option>
                            <option value="Canvas">Canvas</option>
                            <option value="CtcLink">CtcLink</option>
                        </select>

                        {
                            missingClasses !== "Select An Answer" && (
                                <>
                                    {
                                        missingClasses === "Canvas" && (
                                            <>
                                                <h5>Solutions:</h5>
                                                <p>Classes won't be available on Canvas until the day before or on the same day the classes start. If their classses already started and they still haven't seen them, send them to the instructors to get the classes published</p>

                                            </>
                                        )
                                    }

                                    {
                                        missingClasses === "CtcLink" && (
                                            <>

                                                <h5>Solutions:</h5>
                                                <p>Have the students login to the ctcLink, and make sure that they have registered for the classes on there. If they were dropped for non-payment, and they got an email from Enrollment Services, check them into enrollment services to figure that out.</p>

                                            </>
                                        )
                                    }
                                
                                </>
                            )
                        }
                        
                    </div>
                )
            }

            {
                service !== "Select a Service" && enrollmentServices === "DRNP (Drop For Non-Payment)" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Check them in to Enrollment Services. They will be able to help them with the next step</p>
                        
                    </div>
                )
            }
            
            {
                service !== "Select a Service" && enrollmentServices === "Verification Letter of Enrollment" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Check them in to Enrollment Services to get the verification letter.</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && enrollmentServices === "Running Start" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Check them in to Enrollment Services for any running start questions that you can't answer.</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && enrollmentServices === "Waiver" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h3>Which one of the following waiver is the student looking for?</h3>
                        <select name="clarify-question" id="enrollment-questions" onChange={(e) => {setWaiver(e.target.value)}}>
                            <option value="Select An Answer">Select An Answer</option>
                            <option value="State Employee Waiver">State Employee Waiver</option>
                            <option value="Senior Waiver">Senior Waiver</option>
                            <option value="Non-Resident Tuition Waiver">Non-Resident Tuition Waiver</option>
                        </select>
                        
                    </div>
                )
            }

            {
                service !== "Select a Service" && waiver === "State Employee Waiver" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <p>NOTE: State employee is only allowed to register one business day before the quarter starts if they want to use the State Employee Waiver</p>
                        <p>State Employee Waiver: <a href="https://www.bellevuecollege.edu/admissions-aid/tuition-fees/state-employee-tuition-waiver/" target='_blank'>https://www.bellevuecollege.edu/admissions-aid/tuition-fees/state-employee-tuition-waiver/</a></p>
                        <p>Make sure they register for the class before submitting the state employee waiver form</p>
                        <p>Check them in to the Enrollment Services if you are not sure how to do them</p>

                    </div>
                )
            }

            {
                service !== "Select a Service" && waiver === "Senior Waiver" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <p>NOTE: Senior waiver student is only allowed to register one business day before the quarter starts if they want to use the Senior Waiver</p>
                        <p>Senior Waiver form: <a href="https://forms.bellevuecollege.edu/studentcentral/senior-waiver-request-form/" target='_blank'>https://forms.bellevuecollege.edu/studentcentral/senior-waiver-request-form/</a></p>
                        <p>Make sure they register for the class before submitting the Senior Waiver form</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && waiver === "Non-Resident Tuition Waiver" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <p>NOTE: If students are taking classes online but they are an out-of-state student, the non-resident waiver will allow them to pay a tuition rate that is as close to the Resident rate as it can. However, this doesn't mean that they are going to pay the resident rate.</p>
                        <p>Tuition Waiver: <a href="https://forms.bellevuecollege.edu/studentcentral/tuition-waiver-residency-documentation/" target='_blank'>https://forms.bellevuecollege.edu/studentcentral/tuition-waiver-residency-documentation/</a></p>
                        <p>If the students have any further questions, check them into the Enrollment Services</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && waiver === "Residency" && (
                    <div>
                        <h2>Recommended Service</h2>

                        <p>NOTE: For students to be considered as a Washington State resident, they will have to be in Washington State for 12 months consecutively. If the student was an international student and recently became a Permanent Resident/Green Card, their residency will start from when they have received their Permanent Resident/ Green Card.</p>

                        <p>For any Residency questions, check the student in to Enrollment Services for further assistance</p>
                    </div>
                )
            }


            {/* Financial Aid */}
            {
                service !== "Select a Service" && financialAid === "FAFSA" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <h5>Solutions</h5>
                        <p>Check them in to Financial Aid.</p>

                    </div>
                )
            }
            {
                service !== "Select a Service" && financialAid === "WASFA" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions</h5>
                        <p>Check them in to Financial Aid.</p>
                        
                    </div>
                )
            }
            {
                service !== "Select a Service" && financialAid === "Documents" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions</h5>
                        <p>Check them in to Financial Aid. If they are comfortable with dropping their documents in the drop box, they can use the drop box across from the desk.</p>
                        
                    </div>
                )
            }
            {
                service !== "Select a Service" && financialAid === "Bank Mobile / Bank Mobile Refund" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions</h5>
                        <p>Check them in to Financial Aid for BankMobile questions.</p>
                        
                    </div>
                )
            }
            {
                service !== "Select a Service" && financialAid === "Scholarship" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <h5>Solutions</h5>
                        <p>NOTE: If the tuition is paid by the employer or they have a GET plan or college saving account, Refer to the Student Financial Services for more details</p>
                        <p>Check them in to Financial Aid. This would include 3rd party scholarship.</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && financialAid === "Proof of Citizenship" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions</h5>
                        <p>Check them in to Financial Aid.</p>
                        
                    </div>
                )
            }

            {/* Evaluations and graduatioon */}

            {
                service !== "Select a Service" && evalGrad === "Official Transcripts sent from another college" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        
                        <p>If the student is wanting to check if their transcript has been received, check them into Evaluations and Graduation.</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && evalGrad === "General Graduation Questions" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h3>Do they have questions about whether they have all the required classes or they have questions about their graduation application?</h3>
                        <select name="generalGradQuestions" id="gen-grad-ques" onChange={(e) => {setGenEvalType(e.target.value)}}>
                            <option value="Select an Answer">Select an Answer</option>
                            <option value="Their Reqired Classes">Their Reqired Classes</option>
                            <option value="Graduation Application">Graduation Application</option>
                        </select>
                        {
                            genEvalType !== "Select an Answer" && (
                                <>
                                    <h5>Solutions:</h5>
                                    {
                                        genEvalType === "Their Reqired Classes" && (
                                            <p>Send them into Academic Advising Drop-in on Tuesday and Wednesday: 9:30AM - 12PM, 1-4PM (Summer Hours are varied)</p>
                                        )
                                    }

                                    {
                                        genEvalType === "Graduation Application" && (
                                            <p>Send them to Evaluation and Graduation for further assistance</p>
                                        )
                                    }
                                
                                </>
                            )
                        }

                    </div>
                )
            }

            {
                service !== "Select a Service" && evalGrad === "Transfer Credit Processing Status" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions</h5>
                        <p>NOTE: Make sure to let them know that if they haven't submitted the transfer credit request, their transcript won't be processed until then. The 2-4 weeks estimate processing time will start when the transfer credit request is submitted.</p>
                        <p>Transfer Credit Request form: <a href="https://forms.bellevuecollege.edu/studentcentral/evaluation-of-transfer/?_gl=1*c2ln5c*_gcl_au*Nzc3NTYwMDQ4LjE3ODE1NDE0MjI.*_ga*MTc4NzMxMzUwNS4xNzgxNTQxNDIy*_ga_D205WT30XL*czE3ODQ3NTU0OTEkbzk1JGcxJHQxNzg0NzU1NTA3JGo0NCRsMCRoMTQ2OTA3MDg3MCRkbHAwb2Frbk1XRWJsSHBjZkVUSi1pZVRLSE5EUFVlZ1gwQQ.."target='_blank'>Go to Transfer Credit Request form</a></p>

                        <p>Student Central Processing Dashboard is also available to students to check the processing time. <a href="https://www.bellevuecollege.edu/current-students/student-central/processing-dashboard/"target='_blank'>Go to Processing Dashboard</a></p>
                        <p>Check them in to Evaluation and Graduation for more questions about their transfer credits processing status</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && evalGrad === "Graduation Application" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>NOTE: Graduation Application is seperate from the Graduation Application on ctcLink and the commencement sign up. We DO NOT use ctcLink for graduation application. Refer students to the Bellevue College website. Students don't have to sign up for the commencement to get the diploma. There will be graduation application fee after they submitted their application </p>
                        <p>Check them into Evaluation and Graduation for any questions regarding Graduation Application</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && evalGrad === "Diploma" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Refer the student to the Student Central Processing Dashboard to check the processing time for Physical Diploma. Digital diploma will be sent to their email as soon as their application is processed</p>
                        <p>Student Central Processing Dashboard is also available to students to check the processing time. <a href="https://www.bellevuecollege.edu/current-students/student-central/processing-dashboard/"target='_blank'>Go to Processing Dashboard</a></p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && evalGrad === "Look over the transcript before applying" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Potentially, New Student Advisors will be able to look at their transcript as they are planning to apply to the college. As of this moment, we are not able to look at their transcript yet before they apply. If they have any questions, they can reach out to Admission Advising for any further assistance </p>
                        <p>Email: <a href="mailto: welcome@bellevuecollege.edu">welcome@bellevuecollege.edu</a></p>
                        

                    </div>
                )
            }

            {/* Placement and Testing */}

            {
                service !== "Select a Service" && placeTest === "Testing Appointment" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <h5>Solutions:</h5>
                        <p>NOTE: Testing Appointment can be for a class or a placement test. Make sure to check if they have any accommodation. Sometimes Testing can be accommodated through the DRC.</p>

                        <p>Confirm their appointment time and send them down the hallway to check in for their test. If they are over 10 mins early to their appointment, have them wait in the lounging area until 10 mins before the test time to check in.</p>
                        
                        <p>If the student is late for their appointment, send them down to testing still and they can sort it out with testing. If testing staff is not available at the testing front desk, check them in line with placement and testing</p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && placeTest === "Unofficial transcript evaluation" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <h5>Solutions:</h5>
                        <p>Student can submit an unofficial college/highschool transcript to placement and testing to get their English and Math placement.</p>
                        <p>To get their English and Math placement, they can upload their unofficial transcript to <a href='https://www.bellevuecollege.edu/current-students/placement-testing-services/placement/'>the placement and testing form</a></p>
                    </div>
                )
            }

            {
                service !== "Select a Service" && placeTest === "Proctored Test for other schools" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>
                        
                        <h5>Solutions:</h5>
                        <p>NOTE: A student from another school can request for an in-person proctored exam at a college that is not their home college, especially if they are taking classes online from another school.</p>

                        <p>Check them into Placement and Testing for any questions or if they want to request for an appointment.</p>
                    </div>
                )
            }

            {/* Welcome Center */}

            {
                service !== "Select a Service" && welcomeCenter === "Do they have an appointment?" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h3>Do they have an appointment?</h3>
                        <select name="Appointment Question" id="appointment-question" onChange={(e) =>{setAppointmentQuestion(e.target.value)}}>
                            <option value="Select An Answer">Select An Answer</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {
                            appointmentQuestion !== "Select An Answer" && (
                                <>
                                    <h5>Solutions:</h5>
                                    {
                                        appointmentQuestion === "Yes" && (
                                            <p>Confirm the admission appointment on the advisors calendar. Message the advisor on MS Teams to let them know the student is here</p>

                                        )
                                    }

                                    {
                                        appointmentQuestion === "No" && (
                                            <p>Drop-in admission advising is no longer available. Students will have to make an appointment online or send an email to <a href="mailto:welcome@bellevuecollege.edu">welcome@bellevuecollege.edu</a></p>
                                        )
                                    }
                                </>
                            )
                        }
                    </div>
                )
            }
            
            {
                service !== "Select a Service" && welcomeCenter === "Campus Tour" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Campus Tour list will be sent to the Campus Tour/Outreach group thread. Confirm their name on the list and write down their name on a sticky note to send the list to one of the Outreach Staff later on.</p>

                        <p>NOTE: </p>
                        <p>- There is a possibility that students drop-in for a campus tour. Generally, we can add them to the list on the same day. Make sure to get their name, phone number, and email address (either personal or Bellevue College email is fine)</p>
                        <p>- If it is an employee, nothing is needed to be noted down. As long as they let us know that they are an employee and they are there for a tour then they are all set.</p>
                    </div>
                )
            }

            {/* Student Financial Services */}

            {
                service !== "Select a Service" && sfs === "Make a Payment" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Students can make a payment online through CtcLink or Check them into the Student Financial Services to make a payment</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "Payment Plan" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>Students can set up a NelNet Payment plan through the full site mode on ctcLink. For any further assistance, check them into the Student Financial Services to get help set up for a payment plan</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "ORCA Card Pick-up" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>- If the student has requested online for an ORCA card and received an email to pick up their ORCA card, check them into SFS to pick up their ORCA card.</p>
                        <p>- If the student has NOT requested online, they can scan the QR code at the desk to request online. </p>
                        <p>ORCA online request form: <a href="https://www.bellevuecollege.edu/maps-directions/bus-orca-card/">https://www.bellevuecollege.edu/maps-directions/bus-orca-card/</a></p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "College Fund - GET Plan" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>This is a rare case that ever happens but if the student has any questions regarding their college savings or 529 plan, check them into the SFS. They will be able to help you out with that.</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "Payment Receipt/Invoices" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>If the student is looking to get a break down of their tuition, check them into the SFS. They will be able to help them out with that.</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "Account Charges" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>If the student has a specific question about the charges that are on their account, Check them into the SFS. They will be able to help them answer those questions.</p>
                    </div>
                )
            }
            {
                service !== "Select a Service" && sfs === "3rd-party Payment" && (
                    <div className='recommended-service'>
                        <h2>Recommended Service</h2>

                        <h5>Solutions:</h5>
                        <p>If the students' employer is paying for their classes, check them into Student Financial Services to learn more on how to get their fund applied</p>
                    </div>
                )
            }





        </div>
    )
}
export default HomePage