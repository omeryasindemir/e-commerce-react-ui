import React from 'react'

const Banner = () => {
  return (
    <section className="banner">
    <div className="banner_wrapper">
      <div className="banner_text">
        <div>
          <h2>Banner Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            velit alias, optio aspernatur totam ipsa officiis. Aperiam,
            exercitationem? Placeat dicta expedita quod impedit quaerat maxime
            reiciendis quas asperiores commodi vitae.
          </p>
        </div>
        <button className="banner_button">
          See All <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>
      <img
        src="https://www.snapfi.com/wp-content/uploads/2017/12/Website-Banner-1920-x-600-Images.png"
        alt=""
      />
    </div>
  </section>
  )
}

export default Banner