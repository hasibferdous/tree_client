import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here, e.g., send data to backend
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="container grid grid-cols-2 mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-32 ml-32">
          <div>
            <h3 className="text-xl font-semibold mb-4">Address:</h3>
            <p>123 Green Street,</p>
            <p>Treeville,</p>
            <p>Forestland, FL 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Phone:</h3>
            <p>Customer Service: (555) 123-4567</p>
            <p>Sales: (555) 987-6543</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Email:</h3>
            <p>info@treeemporium.com</p>
            <p>sales@treeemporium.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours:</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
        <div className="w-3/4 mx-auto bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mt-11 mb-4">
          <h2 className="text-2xl font-bold mb-8 mt-5">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
