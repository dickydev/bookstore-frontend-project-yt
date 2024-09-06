import React from 'react'
import { Carousel } from 'react-bootstrap'
import gambar1 from '../../assets/1.jpg'
import gambar2 from '../../assets/2.jpg'
import gambar3 from '../../assets/3.jpg'

const Main = () => {
  return (
    <React.Fragment>
      <main>
        <div className="position-relative" style={{ height: '100%', overflow: 'hidden' }}>
          <Carousel interval={3000} className="h-100">
            <Carousel.Item className="h-100">
              <img
                className="d-block w-100 h-100"
                src={gambar1}
                alt="First slide"
                style={{ objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>First Slide Label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="h-100">
              <img
                className="d-block w-100 h-100"
                src={gambar2}
                alt="Second slide"
                style={{ objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Second Slide Label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="h-100">
              <img
                className="d-block w-100 h-100"
                src={gambar3}
                alt="Third slide"
                style={{ objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Third Slide Label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='card'>
            Card
        </div>
      </main>
    </React.Fragment>

  )
}

export default Main