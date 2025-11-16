import React from "react";

export default function ExperienceSection() {
  const timelineEvents = [
    {
      id: 8,
      date: "Jul 2025",
      company: "Joined C.H. Robinson",
      title: "Senior Insights Manager",
      hasLogo: true,
      isNewCompany: true
    },
    {
      id: 7,
      date: "May 2025",
      company: "University of Texas",
      title: "M.S. Business Analytics",
      hasLogo: true,
      isNewCompany: false,
      isEducation: true
    },
    {
      id: 6,
      date: "Jan 2024",
      company: "Promotion",
      title: "Senior Research Analyst",
      hasLogo: false,
      isNewCompany: false
    },
    {
      id: 5,
      date: "Feb 2022",
      company: "Joined Arrive Logistics",
      title: "Research Analyst",
      hasLogo: true,
      isNewCompany: true
    },
    {
      id: 4,
      date: "Aug 2021",
      company: "New Role",
      title: "Operations Analyst",
      hasLogo: false,
      isNewCompany: false
    },
    {
      id: 3,
      date: "Jan 2021",
      company: "Promotion",
      title: "Supply Chain Strategic Analyst",
      hasLogo: false,
      isNewCompany: false
    },
    {
      id: 2,
      date: "May 2019",
      company: "New Role",
      title: "Sales Operation Analyst",
      hasLogo: false,
      isNewCompany: false
    },
    {
      id: 1.5,
      date: "May 2019",
      company: "University of Minnesota",
      title: "B.S. MIS\nB.S. Supply Chain Mgmt",
      hasLogo: true,
      isNewCompany: false,
      isEducation: true
    },
    {
      id: 1,
      date: "Feb 2019",
      company: "Joined Banner Engineering",
      title: "Compliance Analyst",
      hasLogo: true,
      isNewCompany: true
    }
  ];

  return (
    <section id="experience" className="w-full pt-12 pb-24 px-6 bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl font-bold text-white px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            Experience
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/30"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`relative flex items-center ${
                  event.isNewCompany ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-white/90 rounded-full border-4 border-white/30 shadow-lg z-10"></div>
                
                {/* Connector Line */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-white/30 z-0 ${
                  event.isNewCompany 
                    ? 'right-1/2 mr-2' 
                    : 'left-1/2 ml-2'
                }`}></div>
                
                {/* Date on opposite side */}
                <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                  event.isNewCompany 
                    ? 'left-1/2 ml-16' 
                    : 'right-1/2 mr-16'
                }`}>
                  <p className="text-white font-bold text-base">{event.date}</p>
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  event.isNewCompany ? 'md:mr-8 md:ml-0 md:text-right' : 'md:ml-8 md:mr-0 md:text-left'
                } w-full md:w-5/12`}>
                  <div className={`backdrop-blur-md border border-white/20 rounded-lg shadow-lg ${
                    event.isNewCompany ? 'bg-white/15' : 'bg-white/10'
                  } ${(event.hasLogo && event.isNewCompany && !event.isEducation) || event.isEducation ? 'flex' : 'p-6'} ${
                    event.isEducation ? 'flex-row-reverse' : ''
                  }`}>
                    {event.hasLogo && event.isNewCompany && !event.isEducation && (
                      <div className="w-32 border-r border-white/30 rounded-l-lg flex items-center justify-center flex-shrink-0 overflow-hidden p-4">
                        {event.id === 8 ? (
                          <img 
                            src="/CHRlogo.png" 
                            alt="C.H. Robinson logo" 
                            className="w-full h-full object-contain"
                          />
                        ) : event.id === 5 ? (
                          <img 
                            src="/Arrivelogo.jpeg" 
                            alt="Arrive Logistics logo" 
                            className="w-full h-full object-contain"
                          />
                        ) : event.id === 1 ? (
                          <img 
                            src="/Bannerlogo.png" 
                            alt="Banner Engineering logo" 
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-white/60 rounded-sm"></div>
                        )}
                      </div>
                    )}
                    {event.isEducation && (
                      <div className="w-32 border-l border-white/30 rounded-r-lg flex items-center justify-center flex-shrink-0 overflow-hidden p-4">
                        <img 
                          src={event.id === 7 ? "/longhorn.jpg" : "/gopher.png"} 
                          alt={event.id === 7 ? "University of Texas logo" : "University of Minnesota logo"} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div className={(event.hasLogo && event.isNewCompany && !event.isEducation) || event.isEducation ? 'p-6 flex-1' : ''}>
                      <div className={`flex items-center gap-3 mb-2 ${
                        event.isNewCompany ? 'md:justify-end' : 'md:justify-start'
                      } justify-start`}>
                        {event.hasLogo && !event.isNewCompany && !event.isEducation && (
                          <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center md:order-1">
                            <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                          </div>
                        )}
                        <h3 className={`font-semibold text-white ${
                          event.id === 1 ? 'text-sm md:order-2' : (event.id === 5) ? 'text-base md:order-2' : (event.id === 1.5) ? 'text-base md:order-2' : 'text-lg md:order-2'
                        }`}>{event.company}</h3>
                      </div>
                      <p className="text-white/80 font-medium mb-1 whitespace-pre-line">{event.title}</p>
                      {/* Show date on mobile only */}
                      <p className="text-white/60 text-sm md:hidden">{event.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}