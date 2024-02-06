import React from 'react'

const SectionRight = () => {
  return (
    <section>
    <div className="section_title">
      <h2>Section Title 2</h2>
    </div>
    <div className="product_card">
      <div className="product_card_text">
        <h3>Title 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          necessitatibus ut, nostrum ex voluptatibus cumque voluptate
          inventore aut odit, dolorem, illo voluptas consequuntur eius. Odio
          aperiam expedita ab architecto voluptas.
        </p>
        <button>See All <i className="bi bi-caret-right-fill"></i></button>
      </div>
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
    </div>
  </section>
  )
}

export default SectionRight