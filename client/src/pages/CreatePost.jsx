import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt, copyToClipboard } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate() //this will allow us to navigate back to the homepage, once the post is created
  const targetSectionRef = useRef(null); //for scrolling to report at end
  

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    industry: '',
    productsAndServices: '',
    keyMarketSegments: '',
    competitiveAnalysis: '',
    // photo: `${preview}/jpeg;base64,${preview}`,
  })
  const [generatingImg, setGeneratingImg] = useState(false) //this is used while making contact with api, and while we're waiting to get image
  const [loading, setLoading] = useState(false)
  const [finalResults, setFinalResults] = useState(false);
  const [counter, setCounter] = useState(0)
  const [responses, setResponses] = useState([]);

  const [object, setObject] = useState({
    model: 'gpt-3.5-turbo', 
    messages:[
      {role: "system", content: "You are a helpful assistant."}
    ]
  });

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = 
      "Market Research Report for the" + promptUppercase + " industry \n\n" + 
      "Industry \n" + responses.answer1 + "\n\n" +
      "Products and Services \n" + responses.answer2 + "\n\n" +
      "Key Market Segments \n" + responses.answer3 + "\n\n" +
      "Competitive Analysis \n" + responses.answer4;
    copyToClipboard(textToCopy);
    setIsCopied(true);
  };

  useEffect(() => {
    function addNewUserMessage() {
      // const newUserMessage = { role: "user", content: `Who won the ${form.prompt} in 2020?` };
      const newUserMessage = { role: "user", content: `Generate five MBA-level paragraphs focusing on the ${form.prompt} industry in the United States. These paragraphs should outline the precise value of this market in 2022 as well as in 2027 with proper citations and sources. You are a senior consultant from Deloitte.  These paragraphs should also talk about key trends affecting this market.` };
      setObject(prevState => ({
        ...prevState,
        messages: [prevState.messages[0], newUserMessage]
        // messages: [...prevState.messages, newUserMessage]
      }));
    }
    addNewUserMessage();
  }, [form.prompt]);

  useEffect(() => {
    console.log('object', object)
  }, [object]);

  useEffect(() => {
    console.log('responses', responses)
  }, [responses]);

  useEffect(() => {
    console.log('counter', counter)
  }, [counter]);

  useEffect(() => {
    console.log('form', form)
  }, [form]);

  const generate1 = async () => {
    if (form.prompt) {
      try {
        setCounter(0) // *I hope this doesn't mess it up - did this so when press regenerate at end it starts back at 0 so 'initializing' shows up
        setGeneratingImg(true); //set to true bc we have started the generation
        setFinalResults(false)
        
        //get back response below
        // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', { //this is what he had on github, might need to change mine below once site is live
        const response = await fetch('https://generatrr.onrender.com/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            object: object, //we're getting this from dalleRoutes.js from req.body
          }),
        });
        //parse data from above so able to see it
        const data = await response.json();
        console.log('data', data)
        // setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); //this is way we're going to save and render our image
        setResponses(prevState => ({
          ...prevState,
          answer1: `${data.text}`
        }))
        const newAssistantMessage = { role: "assistant", content: data.text };
        // const newUserMessage = { role: "user", content: `Where was it played?` };
        const newUserMessage = { role: "user", content: `Generate MBA level and original paragraphs that outline the key product offerings within the ${form.prompt} industry in the United States. Please provide the precise demand in percentages from each service. You are a senior consultant from Deloitte. Make sure all of the research that you do averages various reports throughout the internet.` };
        setObject(prevState => ({
          ...prevState,
          messages: [...prevState.messages, newAssistantMessage, newUserMessage]
        }));

        setCounter(1) //so next function will run when counter is 1
      } catch (err) {
        alert(err);
      } 
    } else {
      alert('Please provide proper prompt');
    }
  };

  const generate2 = async () => {
    try {
      //get back response below
      // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', { //this is what he had on github, might need to change mine below once site is live
      const response = await fetch('https://generatrr.onrender.com/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          object: object, //we're getting this from dalleRoutes.js from req.body
        }),
      });
      //parse data from above so able to see it
      const data = await response.json();
      console.log('data', data)
      // setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); //this is way we're going to save and render our image
      setResponses(prevState => ({
        ...prevState,
        answer2: `${data.text}`
      }))
      const newAssistantMessage = { role: "assistant", content: data.text };
      // const newUserMessage = { role: "user", content: `How many scores?` };
      const newUserMessage = { role: "user", content: `Generate MBA level and original paragraphs that outline the key market segments within the ${form.prompt} industry in the United States. Please provide the precise demand in percentages from each market. You are a senior consultant from Deloitte. Make sure all of the research that you do averages various reports throughout the internet.` };
      setObject(prevState => ({
        ...prevState,
        messages: [...prevState.messages, newAssistantMessage, newUserMessage]
      }));

      setCounter(2) //so next function will run when counter is 1
    } catch (err) {
      alert(err);
    } 
  };

  const generate3 = async () => {
    try {
      //get back response below
      // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', { //this is what he had on github, might need to change mine below once site is live
      const response = await fetch('https://generatrr.onrender.com/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          object: object, //we're getting this from dalleRoutes.js from req.body
        }),
      });
      //parse data from above so able to see it
      const data = await response.json();
      console.log('data', data)
      // setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); //this is way we're going to save and render our image
      setResponses(prevState => ({
        ...prevState,
        answer3: `${data.text}`
      }))
      const newAssistantMessage = { role: "assistant", content: data.text };
      // const newUserMessage = { role: "user", content: `Who won MVP?` };
      const newUserMessage = { role: "user", content: `Generate MBA level and original paragraphs that outline the competitive landscape of the ${form.prompt} industry in the United States. The report should describe the three largest companies involved in the ${form.prompt} industry with their most recent profit and loss statements. The report should also mention how much control in precise percentages that these businesses have in the market.` };
      setObject(prevState => ({
        ...prevState,
        messages: [...prevState.messages, newAssistantMessage, newUserMessage]
      }));

      setCounter(3) //so next function will run when counter is 1
    } catch (err) {
      console.log(err)
      alert(err);
    } 
  };

  const generate4 = async () => {
    try {
      //get back response below
      // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', { //this is what he had on github, might need to change mine below once site is live
      const response = await fetch('https://generatrr.onrender.com/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          object: object, //we're getting this from dalleRoutes.js from req.body
        }),
      });
      //parse data from above so able to see it
      const data = await response.json();
      console.log('data', data)
      // setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` }); //this is way we're going to save and render our image
      setResponses(prevState => ({
        ...prevState,
        answer4: `${data.text}`
      }))
      const newAssistantMessage = { role: "assistant", content: data.text };
      setObject(prevState => ({
        ...prevState,
        messages: [...prevState.messages, newAssistantMessage]
      }));

      setCounter(4) 
    } catch (err) {
      alert(err);
    } finally { //finally does what is coded below regardless of what happens -PUT THIS AT END on LAST ONE
      // setGeneratingImg(false);
      setTimeout(() => {
        setGeneratingImg(false);
        // scroll to section
        if (targetSectionRef.current) {
          window.scrollTo({
            top: targetSectionRef.current.offsetTop,
            behavior: "smooth",
          });
          targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      //   // setCounter(4)
      }, 5000); // THIS MAY CAUSE MAJOR ISSUES. Set a delay of 10000 milliseconds (10 seconds) - probably is too long - I Think that was causing major issues - why i was getting that 'SyntaxError: Unexpected token 'R', "Rate limit"... is not valid JSON' error, or atleast when i had setCounter(4) in there
    }
  };

  const revealResults = () => {
    setForm(prevState => ({
      ...prevState,
      industry: `${responses.answer1}`,
      productsAndServices: `${responses.answer2}`,
      keyMarketSegments: `${responses.answer3}`,
      competitiveAnalysis: `${responses.answer4}`,
    }))
    setFinalResults(true)

    // scroll to the target section - this isn't working here, but seems to be above in generate4 function for just when the button 'reveal results' shows up
    // attempt 1
    // targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    // attempt 2
    // if (targetSectionRef.current) {
    //   targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    // }
    // attempt 3
    // if (targetSectionRef.current) {
    //   window.scrollTo({
    //     top: targetSectionRef.current.offsetTop,
    //     behavior: "smooth",
    //   });
    //   targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); //ensure browser doesn't reload the application

    if (form.prompt && finalResults) {
      setLoading(true);
      try {
        // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/post', { //this is what he had on github - will eventually need something like this like as well as other routes bc it's not gonna be localhost
        const response = await fetch('https://generatrr.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form), //we're getting this from postRoutes.js from req.body
          // body: JSON.stringify({ ...form }), 
          // body: JSON.stringify(responses),
        });

        await response.json();
        // alert('Success'); //he had this on github
        navigate('/share');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    }
  };

  // make sure we can type values into our form fields
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value }) //take keypress event, call the setForm state, spread the form, and update the name with the value user just typed in

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const promptUppercase = form.prompt.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  //Tomorrow - 1) need to finish the formatting below 2) do I need to do a setTimeout for the final one? or promise to make sure all the data is back? seems to be taking a little bit before it's done (console log is still going) 3) get the submit button working for a pdf. 4) Change content to be relevant 5) put a lock on the prompt part of form after generate button is done and unlock after done. 6) eventually put relevant questions 7) maybe add button instead of generate, to clear form bc you can just press enter and it submits page - think of way to make this better

  //I WANTED TO USE THIS reusable component, but it only let me put in 1 keystroke at a time in the input field before exiting out of the field -> So I'm manually adding it now on each condition. Actually I'll keep it in middle bc loader doesn't allow you to change anything anyway
  const ReusuableContentAndForm = ({ form, handleChange, handleSurpriseMe, handleSubmit }) => (
    <div>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Generate Market Research Reports Instantly</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Simply input your desired industry to obtain a customized market analysis report. If the results don't quite match your expectations, click "generate" for another version. After crafting your report, feel free to share it within the community. Presenting Version One, concentrating on the U.S. Market, with expanded markets and features on the horizon.</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          {/* <FormField 
            labelName="Alias"
            type="text"
            name="name"
            placeholder="Joey Diaz"
            value={form.name}
            handleChange={handleChange}
          /> */}
          <FormField 
            labelName="Industry"
            type="text"
            name="prompt"
            placeholder="Insert Industry Keyword Here. For example, 'coffee shop'."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div className="flex flex-row gap-5">
          <div className="mt-5">
            <button
              type="button"
              onClick={generate1}
              // onClick={generateImage}
              className="mt-3 text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
          </div>
          {/* <div className="mt-5">
            <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
            <button
              type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Sharing...' : 'Share with the Community'}
              SHOULD ABOVE BE GONE UNTIL REPORT IS OVER?
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
  

  if (counter === 0) {
    return (
      <section className='max-w-7xl mx-auto'>
        {/* <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} /> */}
        <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Generate Market Research Reports Instantly</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Simply input your desired industry to obtain a customized market analysis report. If the results don't quite match your expectations, click "generate" for another version. After crafting your report, feel free to share it within the community. Presenting Version One, concentrating on the U.S. Market, with expanded markets and features on the horizon.</p>
        </div>
        {/* BELOW WAS mt-16. IS THAT BETTER? */}
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            {/* <FormField 
              labelName="Alias"
              type="text"
              name="name"
              placeholder="Joey Diaz"
              value={form.name}
              handleChange={handleChange}
            /> */}
            <FormField 
              labelName="Industry"
              type="text"
              name="prompt"
              placeholder="Insert Industry Keyword Here. For example, 'coffee shop'."
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
          <div className="flex flex-row gap-5">
            <div className="mt-5">
              <button
                type="button"
                onClick={generate1}
                // onClick={generateImage}
                className="mt-3 text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generatingImg ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>
        </form>
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
            <p>Initializing</p>
          </div>
        )}
      </section>
    )
  } else if (counter === 1) {
    generate2();
    return (
      <section className='max-w-7xl mx-auto'>
        <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} />
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
            <p>25% Completed</p>
          </div>
        )}
      </section>
    )
  } else if (counter === 2) {
    generate3();
    return (
      <section className='max-w-7xl mx-auto'>
        <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} />
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
            <p>50% Completed</p>
          </div>
        )}
      </section>
    )
  } else if (counter === 3) {
    generate4();
    return (
      <section className='max-w-7xl mx-auto'>
        <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} />
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
            <p>75% Completed</p>
          </div>
        )}
      </section>
    )
  } else if (counter === 4) {
    return (
      <section className='max-w-7xl mx-auto'>
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Generate Market Research Reports Instantly</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Simply input your desired industry to obtain a customized market analysis report. If the results don't quite match your expectations, click "generate" for another version. After crafting your report, feel free to share it within the community. Presenting Version One, concentrating on the U.S. Market, with expanded markets and features on the horizon.</p>
        </div>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField 
              labelName="Enter a Name or Alias"
              type="text"
              name="name"
              placeholder="Joey Diaz"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField 
              labelName="Industry"
              type="text"
              name="prompt"
              placeholder="Insert Industry Keyword Here. For example, 'coffee shop'."
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
          {/* <div className="flex flex-row gap-5"> */}
          <div className="flex flex-row flex-wrap justify-between sm:justify-start sm:gap-5">
            <div className="mt-5">
              <button
                type="button"
                onClick={generate1}
                // onClick={generateImage}
                className="mt-3 text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-3 py-2.5 sm:px-5 text-center"
              >
                {generatingImg ? 'Generating...' : 'Regenerate'}
              </button>
            </div>
            {finalResults && (
            <div className="mt-5">
              {/* <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p> */}
              <button
                type="submit"
                className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-3 py-2.5 sm:px-5 text-center"
              >
                {loading ? 'Sharing...' : 'Share with the Community'}
              </button>
            </div>
            )}
          </div>
        </form>
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
              <p>Finalizing</p>
              {/* PUT COOL FLASHING EFFECTS ON CODE ABOVE? Or other completed sections */}
            </div>
          )}
        <div>
          {(finalResults === false && generatingImg === false) && (
          // {(generatingImg === false) && (
            <div ref={targetSectionRef} className="text-center">
              <br/><br/>
              <h1 className="font-extrabold text-[#222328] text-[40px]">Report Generated Successfully &#10004;</h1>
              {/* <br/> */}
              <button className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-lg w-full sm:w-auto px-5 py-3.5 text-center" onClick={revealResults}>
                Reveal results
              </button>
            </div>
          )}
          {finalResults && (
            <div className="border border-gray-300 px-5 pt-2 pb-5 mt-10 max-w-[1200px] rounded-sm">
              <div className="flex justify-end py-2">
                <button onClick={handleCopyClick} className="inline-flex items-center px-4 py-1.5 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  {isCopied ? <span className="mr-2" role="img" aria-label="checkmark">&#x2713;</span> : null}
                  {isCopied ? "Copied!" : "Copy to clipboard"}
                </button>
              </div>
              <h1 ref={targetSectionRef} className="text-center font-extrabold text-[#222328] text-[32px]">Market Research Report for the {promptUppercase} Industry</h1>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Industry</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{responses.answer1}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Products and Services</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{responses.answer2}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Key Market Segments</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{responses.answer3}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Competitive Analysis</h3>
              <p className="mt-2 text-[#666e75] text-[16px]" style={{ whiteSpace: "pre-wrap" }}>{responses.answer4}</p>
            </div>
          )} 
          {/* <div ref={targetSectionRef}></div> */}
        </div>
      </section>
    )
  }
}

export default CreatePost