import React from 'react'

const SectionLeft = () => {
  return (
    <section>
    <div className="section_title">
      <h2>Section Title 1</h2>
    </div>
    <div className="product_card">
      <div className="product_img_wrapper">
        <div className="product_card_image">
          <img
            src="https://www.lrg.co.uk/wp-content/uploads/2017/12/450x450.png"
            alt=""
          />
        </div>
        <div className="product_card_image">
          <img
            src="https://www.lrg.co.uk/wp-content/uploads/2017/12/450x450.png"
            alt=""
          />
        </div>
        <div className="product_card_image">
          <img
            src="https://www.lrg.co.uk/wp-content/uploads/2017/12/450x450.png"
            alt=""
          />
        </div>
        <div className="product_card_image">
          <img
            src="https://www.lrg.co.uk/wp-content/uploads/2017/12/450x450.png"
            alt=""
          />
        </div>
      </div>
      <div className="product_card_text">
        <div>
        <h3>Title 1</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          necessitatibus ut, nostrum ex voluptatibus cumque voluptate
          inventore aut odit, dolorem, illo voluptas consequuntur eius. Odio
          aperiam expedita ab architecto voluptas.
        </p>
        </div>
        <button>See All <i className="bi bi-caret-right-fill"></i></button>
      </div>
    </div>
  </section>
  )
}

export default SectionLeft