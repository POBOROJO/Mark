import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";

const reasons = [
  {
    title: "Good Blogs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Well Explained",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Well Documented",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <CircleHelp className="size-6" />,
  }
];

const Feature = () => {
  return (
    <div className="flex justify-center items-center">
    <section className="py-32">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            What is here ?
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Feature;
