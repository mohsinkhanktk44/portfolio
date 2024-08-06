import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

function Index() {
  const data = [
    {
      projectName: "First Project",
      technologies: "HTML,CSS,Next,tailwind",
      description: "This is decsriton",
      image: "https://picsum.photos/200/300",
    },
    {
      projectName: "second Project",
      technologies: "HTML,CSS,Next,tailwind",
      description: "This is decsriton seond",
      image: "https://picsum.photos/800/300",
    },
    {
      projectName: "second Project",
      technologies: "HTML,CSS,Next,tailwind",
      description: "This is decsriton seond",
      image: "https://picsum.photos/800/300",
    },
    {
      projectName: "second Project",
      technologies: "HTML,CSS,Next,tailwind",
      description: "This is decsriton seond",
      image: "https://picsum.photos/800/300",
    },
    {
      projectName: "second Project",
      technologies: "HTML,CSS,Next,tailwind",
      description: "This is decsriton seond",
      image: "https://picsum.photos/800/300",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    projectName: string;
    technologies: string;
    description: string;
    image: string;
  } | null>(null);

  const newModal = (index: number) => {
    setSelectedItem(data[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-start flex-col items-center h-[100vh] w-full bg-[#222222]">
      <div className="absolute top-0 left-5">
        <Sidebar />
      </div>
      <div className="flex justify-start items-center mt-8 gap-6 flex-col w-full">
        <div className="flex justify-center items-center">
          <p className="text-5xl font-black text-white">
            My <span className="text-[#ffb400]">Portfolio</span>
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <p className="w-6 bg-[#ffb400] h-[2px]"></p>
          <p className="text-[#b5b5b5]">
            A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.
          </p>
          <p className="w-6 bg-[#ffb400] h-[2px]"></p>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {data.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                className="flex justify-center rounded-md"
                onClick={() => newModal(index)}
              >
                <Card
                  text={item?.projectName}
                  url={"https://www.npmjs.com/package/react-typed"}
                  img={item?.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedItem?.image}
              alt={selectedItem?.projectName}
              className="max-w-full mb-4"
            />
            <div className="flex gap-2">
              <p className="text-Black font-medium">Project Name :</p>
              <p>{selectedItem?.projectName}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-Black font-medium">Description :</p>
              <p>{selectedItem?.description}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-Black font-medium">Technologies :</p>
              <p>{selectedItem?.technologies}</p>
            </div>
            <button
              className="mt-4 p-2 bg-[#ffb400] text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;
