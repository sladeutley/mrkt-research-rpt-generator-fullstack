import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate() //this will allow us to navigate back to the homepage, once the post is created

  const [form, setForm] = useState({
    name: '',
    prompt: '',
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

  useEffect(() => {
    function addNewUserMessage() {
      const newUserMessage = { role: "user", content: `Who won the ${form.prompt} in 2020?` };
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

  const generate1 = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true); //set to true bc we have started the generation
        setFinalResults(false)
        
        //get back response below
        // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/dalle', { //this is what he had on github, might need to change mine below once site is live
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
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
        const newUserMessage = { role: "user", content: `Where was it played?` };
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
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
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
      const newUserMessage = { role: "user", content: `How many scores?` };
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
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
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
      const newUserMessage = { role: "user", content: `Who won MVP?` };
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
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
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
      setGeneratingImg(false);
      // setTimeout(() => {
      //   setGeneratingImg(false);
      //   // setCounter(4)
      // }, 3000); // Set a delay of 10000 milliseconds (10 seconds) - probably is too long - I Think that was causing major issues - why i was getting that 'SyntaxError: Unexpected token 'R', "Rate limit"... is not valid JSON' error, or atleast when i had setCounter(4) in there
    }
  };

  const revealResults = () => {
    setFinalResults(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); //ensure browser doesn't reload the application

    if (form.prompt && finalResults) {
      setLoading(true);
      try {
        // const response = await fetch('https://dalle-arbb.onrender.com/api/v1/post', { //this is what he had on github - will eventually need something like this like as well as other routes bc it's not gonna be localhost
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form), //we're getting this from postRoutes.js from req.body
          // body: JSON.stringify({ ...form }), //he had this on github instead of above
        });

        await response.json();
        // alert('Success'); //he had this on github
        navigate('/');
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

  const ReusuableContentAndForm = ({ form, handleChange, handleSurpriseMe, handleSubmit }) => (
    <div>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Generate Market Research Reports Instantly</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Type in your name and search term for an industry you'd like a market research report on. If you're not happy with the results, press the generate button again for another version. Once you've created the report, you can then share it with others in the community.</p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
            labelName="Your Name"
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
            placeholder="Insert Industry Keyword Here. For example, 'coffee'."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div class="flex flex-row gap-5">
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
          <div className="mt-5">
            {/* <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p> */}
            <button
              type="submit"
              className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Sharing...' : 'Share with the Community'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  

  if (counter === 0) {
    return (
      <section className='max-w-7xl mx-auto'>
        <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} />
        {generatingImg && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
            <p>0% Completed</p>
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
        <ReusuableContentAndForm form={form} handleChange={handleChange} handleSurpriseMe={handleSurpriseMe} handleSubmit={handleSubmit} />
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
              <p>Finalizing</p>
              {/* PUT COOL FLASHING EFFECTS ON CODE ABOVE? Or other completed sections */}
            </div>
          )}
        <div>
          {(finalResults === false) && (
          <div className="text-center">
            <br/>
            <h1 className="font-extrabold text-[#222328] text-[32px]">Report Generated Successfully &#10004;</h1>
            <button className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={revealResults}>
              Reveal results
            </button>
          </div>
          )}
          {finalResults && (
            <div className="border border-gray-300 px-5 pt-2 pb-5 mt-10">
              <br/>
              <h1 className="text-center font-extrabold text-[#222328] text-[32px]">Market Research Report for {promptUppercase} Industry</h1>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Industry</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{responses.answer1}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Products and Services</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{responses.answer2}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Key Market Segments</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{responses.answer3}</p>
              <br/>
              <h3 className="font-extrabold text-[#222328] text-[24px] mb-2">Competitive Analysis</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{responses.answer4}</p>
            </div>
          )} 
        </div>
      </section>
    )
  }
}

export default CreatePost