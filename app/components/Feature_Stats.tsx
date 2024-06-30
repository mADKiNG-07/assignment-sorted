export default function Stats() {
  return (
    <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-24">
        <div>
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
            alt="Image Description"
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Crafting Words That Inform, and Engage
              </h2>
              <p className="text-gray-500">
                No matter the subject or complexity, our skilled writers have
                expertise in a wide range of academic disciplines. Whether
                it&apos;s a research paper, essay, thesis, or project, we have
                the knowledge and skills to deliver outstanding results.
              </p>
            </div>

            <ul className="grid grid-cols-3">
              <li className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl lg:text-4xl text-orange-600">
                  4+
                </h2>

                <span className="text-sm sm:text-sm text-gray-500">
                  Years of Experience
                </span>
              </li>

              <li className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl lg:text-4xl text-orange-600">
                  230+
                </h2>

                <span className="text-sm sm:text-sm text-gray-500">
                  Completed Orders
                </span>
              </li>

              <li className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-3xl lg:text-4xl text-orange-600">
                  150+
                </h2>

                <span className="text-sm sm:text-sm text-gray-500">
                  Satisfied Customers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
