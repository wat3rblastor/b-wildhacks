import Footer from "../Footer.tsx";

const BidForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg ">
	      <h2 className="text-2xl font-bold mb-4">Bid Form</h2>
	      <form>
	        <div className="mb-4">
	          <label htmlFor="bidAmount" className="block text-gray-700 font-bold mb-2">How much do you want to bid?</label>
	          <input type="text" id="bidAmount" name="bidAmount" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter bid amount" />
	        </div>
	        <div className="mb-4">
	          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Send a message</label>
	          <textarea id="message" name="message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea>
	        </div>
	        <div className="text-center">
	          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit Bid</button>
	        </div>
	      </form>
	    </div>
    </div>
  );
};

export default BidForm;
