import SafaeImage from "../images/safae.jpeg";
import SaraImage from "../images/sara.png";
import RaniaImage from "../images/rania.png";

const StarFilled = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99155 2.12908C10.2093 1.45894 11.1574 1.45894 11.3751 2.12908L12.8063 6.5339C12.9037 6.8336 13.183 7.03651 13.4981 7.03651H18.1296C18.8342 7.03651 19.1272 7.93818 18.5571 8.35235L14.8102 11.0747C14.5552 11.2599 14.4486 11.5882 14.5459 11.8879L15.9772 16.2927C16.1949 16.9629 15.4279 17.5201 14.8578 17.106L11.1109 14.3836C10.8559 14.1984 10.5107 14.1984 10.2558 14.3836L6.50882 17.106C5.93876 17.5201 5.17176 16.9629 5.3895 16.2927L6.82071 11.8879C6.91809 11.5882 6.81141 11.2599 6.55647 11.0747L2.80951 8.35235C2.23945 7.93818 2.53242 7.03651 3.23706 7.03651H7.86856C8.18368 7.03651 8.46296 6.8336 8.56034 6.5339L9.99155 2.12908Z" fill="#FA8D62"/>
  </svg>

);

const StarEmpty = () => (
  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.4583 2.12908C10.6761 1.45894 11.6242 1.45894 11.8419 2.12908L13.2731 6.5339C13.3705 6.8336 13.6498 7.03651 13.9649 7.03651H18.5964C19.301 7.03651 19.594 7.93818 19.0239 8.35235L15.277 11.0747C15.022 11.2599 14.9154 11.5882 15.0127 11.8879L16.444 16.2927C16.6617 16.9629 15.8947 17.5201 15.3246 17.106L11.5777 14.3836C11.3227 14.1984 10.9775 14.1984 10.7226 14.3836L6.97562 17.106C6.40556 17.5201 5.63855 16.9629 5.8563 16.2927L7.28751 11.8879C7.38489 11.5882 7.27821 11.2599 7.02327 11.0747L3.27631 8.35235C2.70625 7.93818 2.99922 7.03651 3.70385 7.03651H8.33535C8.65047 7.03651 8.92976 6.8336 9.02713 6.5339L10.4583 2.12908Z" fill="#8F8F8F"/>
  </svg>

);

const testimonials = [
  {
    name: "Safae Nagbi",
    text: "Haven has been a true lifesaver! Thanks to their AI support, I organized a healthier diet and feel so much better!",
    rating: 5,
    image: SafaeImage,
  },
  {
    name: "Sara El Khayat",
    text: "Thanks to Haven, I found the perfect balance between work and personal life. Their AI suggestions are truly life-changing!",
    rating: 4,
    image: SaraImage,
  },
  {
    name: "Rania Nadim",
    text: "Haven's AI helped me manage my daily tasks effortlessly. I feel more productive and organized than ever before!",
    rating: 3,
    image: RaniaImage,
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 mb-20">
      <h2 className="text-2xl font-semibold text-center mb-6 text-customBlue">
        What people are saying?
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4 mt-20">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative max-w-sm bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            {/* Image */}
            <div className="absolute -top-10 left-1/4 transform -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full border-2 border-white"
              />
            </div>

            {/* Stars */}
            <div className="flex absolute top-4 right-4">
              {[...Array(5)].map((_, starIndex) =>
                starIndex < item.rating ? (
                  <StarFilled key={starIndex} />
                ) : (
                  <StarEmpty key={starIndex} />
                )
              )}
            </div>

            {/* Text Content */}
            <p className="text-black mt-12 mb-4 px-2">{item.text}</p>

            {/* Name */}
            <div className="font-bold text-customBlue mt-auto">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;