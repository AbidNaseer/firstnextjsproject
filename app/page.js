import Button from "./(components)/button/button"
import Navbar from "./(components)/navbar/navbar"
import Image from "next/image"


function Page(){
return(
  <>
  <section className="header" >
  <Navbar />
    <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br /> esse blanditiis in quae perspiciatis quo.
            </p>
            <Button text="VISIT US TO KNOW MORE" />
        </div> 
        </section> 

        <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="course-col">
                <h3>Undergraduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Graduate Programs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
            <div className="course-col">
                <h3>Adult Learning & Degree Completion</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non.</p>
            </div>
        </div>
    </section>

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="campus-col">
                <Image 
                src="/img/Campus1.png"
                width={250}
                height={250}
                 alt="a1" />
                <div className="layer">
                    <h3>DELHI</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image 
                src="/img/Campus2.png"
                width={250}
                height={250}
                 alt="a2" />
                <div className="layer">
                    <h3>HYDERABAD</h3>
                </div>
            </div>
            <div className="campus-col">
                <Image 
                src="/img/Campus3.png"
                width={250}
                height={250}
                alt="" />
                <div className="layer">
                    <h3>MUMBAI</h3>
                </div>
            </div>
        </div>
    </section>

    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="facilities-col">
                <Image 
                src="/img/libary.png"
                width={250}
                height={250}
                alt="" />
                <h3>Best Libary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <Image 
                src="/img/playground.png"
                width={250}
                height={250}
                alt="" />
                <h3>Athletics</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
            <div className="facilities-col">
                <Image 
                src="/img/food.png"
                width={250}
                height={250}
                alt=""/>
                <h3>Tasty and Healthy Food</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    </section>

    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="testimonials-col">
                <Image 
                src="/img/user.png"
                width={250}
                height={250}
                alt="oo.."/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
            <div className="testimonials-col">
                <Image 
                src="/img/user.png"
                width={250}
                height={250}
                alt="oo.." />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-alt"></i>
                </div>
            </div>
        </div>
    </section>
  
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button href="contact" text=" CONTACT US" style={{color : "white"}}/>
    </section>


 </>
)
}
export default Page