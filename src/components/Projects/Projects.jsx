import * as React from "react";
import "./Projects.css";
import { projects } from "./data";

import { Card, CardContent } from "../ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <section className="justify-center flex">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="">
          {projects.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="h-[600px] w-full">
                  <CardContent className="flex aspect-square items-center justify-center h-full p-6 w-full flex-col relative">
                    <h2 className="absolute text-6xl top-0 right-10 text-[var(--light-grey)]">
                      0{index + 1}
                    </h2>
                    <div className="w-[80%] h-full">
                      <div className="flex flex-col gap-5 flex-wrap">
                        <h2 className="text-[24px] text-black bg-[rgb(167,167,167)] px-5 rounded-3xl w-fit">
                          {data.name}
                        </h2>
                        <p className="text-[var(--light-grey)] text-[32px]">
                          {data.subtitle}
                        </p>
                        <div className="flex gap-3">
                          {data.skills.map((skill, index) => {
                            return (
                              <div
                                key={index}
                                className="rounded-3xl text-black bg-[var(--light-grey)] px-4 flex-wrap"
                              >
                                {skill}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="relative flex justify-between mt-5 gap-5">
                        <div className="flex flex-col justify-between">
                          <p className="tracking-wide">{data.description}</p>
                          <a
                            href={data.link}
                            target="_blank"
                            className="underline"
                          >
                            view project
                          </a>
                        </div>
                        <img
                          src={data.url}
                          alt=""
                          className="w-[450px] h-[280px] object-contain"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Projects;
