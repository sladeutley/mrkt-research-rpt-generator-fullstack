if (counter === 0) {
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
      <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning images through Dall-E AI and share them with the community. *NOTE - If not happy with the image generated, press the generate button again</p>
    </div>

    <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <FormField 
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A plush toy robot sitting against a yellow wall"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
        />
      </div>
    </form>
  </section>
  )
} else if (counter === 1) {
  generate2();
  return (
    <div>
      <p>25% Completed</p>
    </div>
  )
} else if (counter === 2) {
  generate3();
  return (
    <div>
      <p>50% Completed</p>
    </div>
  )
} else if (counter === 3) {
  generate4();
  return (
    <div>
      <p>75% Completed</p>
    </div>
  )
} else if (counter === 4) {
  return (
    <div>done</div>
  )
}



<section className='max-w-7xl mx-auto'>
<div>
  <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
  <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning images through Dall-E AI and share them with the community. *NOTE - If not happy with the image generated, press the generate button again</p>
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
      labelName="Prompt"
      type="text"
      name="prompt"
      placeholder="A plush toy robot sitting against a yellow wall"
      value={form.prompt}
      handleChange={handleChange}
      isSurpriseMe
      handleSurpriseMe={handleSurpriseMe}
    />

  </div>

  <div className="mt-5 flex gap-5">
    <button
      type="button"
      onClick={generate1}
      // onClick={generateImage}
      className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {generatingImg ? 'Generating...' : 'Generate'}
    </button>
  </div>

  <div className="mt-10">
    <p className="mt-2 text-[#666e75] text-[14px]">** Once you have created the image you want, you can share it with others in the community **</p>
    <button
      type="submit"
      className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
      {loading ? 'Sharing...' : 'Share with the Community'}
    </button>
  </div>
</form>
</section>