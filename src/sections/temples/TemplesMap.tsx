import React, { MouseEvent, useEffect, useState } from "react";
import { ITempleMapSelected } from "@/types/TemplesTypes";

export default function TemplesMap() {
  useEffect(() => {
    const setUpText = document.querySelectorAll("path").forEach((province) => {
      let { x, y, width, height } = province.getBBox();
      let px = x + width / 2;
      let py = y + height / 2;
      let name = document.createElementNS("http://www.w3.org/2000/svg", "text");
      name.setAttribute(
        "style",
        "text-anchor: middle; cursor: pointer; font-size: .25rem; font-weight: 200;"
      );
      name.setAttribute("x", px.toString());
      name.setAttribute("y", (py).toString());
      name.innerHTML = province.ariaLabel ? province.ariaLabel : "Select";
      province.parentNode?.append(name);
    });
  }, []);

  const [selected, setSelected] = useState<ITempleMapSelected>({
    Phayao: true,
    Prachinburi: true,
    Ayutthaya: true,
    Pattani: true,
  });

  const handleOnSelect = (e: MouseEvent<SVGPathElement>) => {
    const temp = { ...selected };
    temp[e.currentTarget.id as keyof ITempleMapSelected] =
      !selected[e.currentTarget.id as keyof ITempleMapSelected];
    setSelected(temp);
  };

  return (
    <div className="text-lg">
      <svg id="map" x="0px" y="0px" viewBox="0 0 600 600">
        <g>
          <path
            id="Phayao"
            aria-label="พะเยา"
            onClick={handleOnSelect}
            className={`${
              selected.Phayao ? "fill-secondary" : "fill-gray-200"
            } hover:cursor-pointer transition ease-in-out duration-200`}
            d="M99.49,27.44l1.48,1.38l0.79,0.87l0.36,0.68l0,0.39l-0.78,0.76l-0.43,0.2l-0.55,0.52l-0.53,0.61
							l-0.21,0.72l-0.17,0.91l-0.29,1.99l-0.49,1.56l-2.34,3.06l-0.41,0.68l0.04,0.57l0.04,0.57l0.6,1.68l0.22,0.52l0.81,0.96l1.12,1.08
							l0.34,0.21l0.72,0.21l0.72,0.21l0.95-0.04l0.45-0.11l0.32-0.27l0.21-0.34l0.3-0.75l0.25-0.16l0.45-0.11l0.41,0.09l0.32,0.12
							l0.81,0.96l0.32,0.12l0.5,0.07l0.8-0.29l0.48-0.02l0.32,0.12l0.34,0.21l0.52,0.55l0.31,0.89l0.05,1.43l0.28,1.95l0.05,4.61
							l0.22,0.52l0.36,0.68l0.74,1.07l1.06,1.19l0.27,0.32l0.31,0.89l0.31,0.89l0.17,1.5l0.11,0.45l0.18,0.34l0.81,0.96l0.2,0.43
							l0.44,1.43l0.38,0.78l0.34,0.21l1.06,0.42l0.25,0.23l0.06,0.66l-0.44,0.97l-1.2,1.83l-0.69,0.74l-0.55,0.52l-0.75,0.47l-1.1,0.65
							l-0.8,0.29l-0.39,0.38l-0.46,0.49l-0.36,1.72l-0.17,0.91l-0.03,0.68l0.38,0.78l0.52,0.55l2.14,1.7l0.18,0.34l-0.12,0.32l-0.57,0.43
							l-0.55,0.13l-0.48,0.02l-0.82-0.19l-1.06-0.42l-2.31-0.79l-0.79-0.1l-0.88-0.08l-0.84,0.11l-0.66,0.06l-0.98,0.33l-0.45,0.11
							L101.66,83l-0.28,0.84l-0.26,1.31l-0.32,3.06l0.26,1.09l0.33,0.59l1.55-0.37l0.93-0.13l0.48-0.02l0.82,0.19l0.68,0.41l0.18,0.34
							l0.31,0.89l-0.03,0.68l-0.25,0.54l-0.57,0.81l-1.42,1.69l-0.8,0.67l-0.75,0.47l-2.48,0.5l-0.78,0.38l-0.32,0.27l-0.53,0.61
							l-3.73,12.54l-0.19,3.22l-12.41,2.02l-2.78,1.24l-1,0.24l-0.86,0.01l-0.82-0.19l-2.56-0.25l-0.75,0.08l-0.43,0.2l-0.71,0.65
							l-1.46,0.74l-0.25,0.16l-1.26,1.55l-2.87-0.75l-1.27,0.31l-0.59,0.33l-0.48,0.02l-0.34-0.21l-0.38-0.78l-0.29-0.8l-0.03-1.34
							l-0.17-0.73l-0.58-0.82l-1.48-1.38l-1.9-1.08l-1.27-0.47l-1.02-0.24l-6.13-1.9l-1.83-0.81l-0.36-0.3l-0.72-0.98l-0.6-0.91
							l-0.43-0.57l-0.99-0.92l-0.49-0.46l-0.54-0.25l-0.79-0.1l-1.11,0.17l-0.91,0.22l-0.57,0.04l-0.77-0.01l-1.83-0.43l-0.48,0.02
							l-0.36,0.09l-0.78,0.38l-0.64,0.15l-0.66,0.06l-1.16-0.01l-0.79-0.1l-0.4-0.48l-0.09-0.36l-0.11-0.84l0-0.39l-0.2-0.43l-0.29-0.41
							l-2.5-2.38l-0.52-0.16l-0.48,0.02l-0.64,0.15l-0.86,0.01l-1.29-0.17l-0.72-0.21l-0.47-0.37l-0.52-0.55l-1.01-1.39l-1.23-2.3
							l-0.11-0.45l-0.43-0.57l-0.47-0.75l-3.87-3.69l-0.45-0.66l-0.33-0.59l-0.22-0.52l-0.38-0.78l-1.26-1.62l-0.65-1.1l-1.08-1.28
							l-0.45-0.66l-0.69-1.66l-0.62-1.78l-1.21-3.85l-0.15-1.02l-0.02-0.48l0-0.39l0.4-1.15l-0.15-0.64l-0.47-0.75L8.44,69.4l-0.47-0.75
							l-0.27-0.71l-0.15-1.41l-0.18-0.34l-1.9-3.49l-0.88-2.87l2.03-0.78l1.24-1.26l1.19-1.44l0.71-0.65l0.57-0.43l17.09-7.37l0.72,0.21
							l0.61,0.53l0.47,0.75l0.22,0.91l-0.18,4.47l0.13,0.93l0.24,1l0.4,0.87l0.47,0.37l0.72,0.21l1.52,0.31l0.77,0.01l0.64-0.15l0.66-0.45
							l0.66-0.45l0.96-1.19l2.86-4.53l0.48-0.4l0.75-0.47l1.62-0.87l0.89-0.31l0.64-0.15l0.39,0l1.22,0.28l1.36,0.06l0.55-0.13l0.43-0.2
							l0.21-0.34l0.03-0.68l-0.28-1.18l0.16-0.52l0.46-0.49l3.93-2.87l0.37-0.47l0.12-0.7l-0.11-0.84l-0.46-1.52l0.07-0.5l0.46-0.88
							l0.67-1.22l0.03-0.68l-0.09-0.36l-0.36-0.68l-0.09-0.36l0.14-0.61l0.46-0.49l0.23-0.63l0.12-0.7l-0.18-0.34l-0.56-1.12l-0.09-0.36
							l0.01-0.77l0.14-0.61l0.34-2.58l0.24-1.02l0.41-0.68l2.36-2.59l0.71-0.65l0.57-0.43l0.45-0.11l2.68-0.45l1.07-0.35l0.5-0.31
							l0.3-0.36l0.33-1.04l0.16-0.52l0.67-0.83l0.55-0.52l0.52-0.22l2.89-1.18l0.75-0.47l0.48-0.4l0.64-0.92l2.94-5.8l0.64-0.92l1.44,1.19
							l1.15,1.17l0.71,1.75l1.19,3.76l1.21,1.83l1.17,1.26l2.95,2.27l1.26,1.24l0.84,1.91l0.44,1.82l0.69,1.66l1.71,1.13l2.19,0.72
							l3.51,0.6l3.33,0.26l1.87-0.64L99.49,27.44L99.49,27.44z"
          />
        </g>
        <g>
          <path
            id="Prachinburi"
            aria-label="ปราจีนบุรี"
            onClick={handleOnSelect}
            className={`${
              selected.Prachinburi ? "fill-secondary" : "fill-gray-200"
            } hover:cursor-pointer transition ease-in-out duration-200`}
            d="M194.73,66.5l0.67,6.38l-0.42,1.06l-1.03,1.31l-1.06,1.22l-1.24,2.03l-0.44,2.99l-0.99,1.49
							l-1.07,0.74l-1.3,0.21l-1.43,0.44l-1.35,0.8l-1.56,1.91l-0.24,1.79l0.35,1.84l1.2,2.6l0.41,1.73l-1.24,1.64l-1.15,1.24l-1.29,1.85
							l-0.24,1.79l0.39,1.64l0.4,1.25l0.41,1.73l0.01,1.63l-0.36,1.72l0.44,1.43l1.06,0.8l3.29,0.08l1.31,0.26l0.65,0.71l0.59,2.46
							l0.66,1.96l0.01,1.63l-0.65,1.7l-1.57,2.69l-1.71,0.51l-2.51,1.18l-0.89,0.31l-0.59-0.05l-0.63-0.23l-1.2-0.58l-0.47-0.37
							l-0.47-0.37l-2.26-3.4l-0.59-0.44l-0.65-0.32l-0.75-0.3l-1.76-1.31l-0.34-0.21l-0.5-0.07l-0.57,0.04l-0.87,0.4l-3.67,1.94
							l-0.34,0.18l-0.21,0.34l-0.21,0.34l0.02,0.48l0.45,2.3l0,0.39l-0.55,0.52l-1.21,0.58l-0.45,0.11l-1.91,0.07l-3.88-0.51l-3.06-0.71
							l-1.14,0.08l-0.52,0.22l-0.41,0.29l-0.12,0.32l-0.19,0.82l-0.17,1.68l-0.12,0.7l-0.23,0.25l-0.29-0.03l-0.5-0.07l-0.49-0.46
							l-0.36-0.3l-0.74-1.07l-23.78-4.88l-0.86,0.01l-0.68,0.36l-0.43,0.2l-0.57,0.04l-0.98-0.05l-1.18,0.28l-0.86,0.01l-1.36-0.06
							l-3.29,0.31l-0.68,0.36l-0.87,0.79l-0.64,0.15l-0.79-0.1l-1.54-0.4l-0.77-0.01l-0.55,0.13l-1.44,0.83l-1.62,1.26l-0.46,0.49
							l-0.41,0.68l-0.44,0.59l-0.34,0.18l-0.71,0.27l-0.29-0.03l-0.23-0.14l0.12-0.7l-0.09-0.36l-0.4-0.48l-0.86-0.37l-0.36-0.68
							l0.08-1.66l0.24-1.02l0-2.79l-0.49-1.23l-2.49-3.54l-1.34-2.37l0.21-0.72l1.55-0.76l1.67-1.07l1.19-1.06l1.33-1.67l0.67-1.22
							l0.79-1.92l0.51-0.7l0.48-0.4l0.91-0.22l0.71-0.27l1.1-0.65l1.32-0.51l0.93-0.13l0.7,0.12l0.75,0.3l0.32,0.12l0.34-0.18l2.65-1.4
							l0.46-0.49l0.28-0.45l0.12-0.32l-0.15-0.64l-0.29-0.8l-0.18-0.34l-1.64-1.63l-0.18-0.34l-0.31-1.27l-0.25-0.23l-1.19-0.96
							l-0.45-0.66l-0.22-0.52l-0.06-0.66l0.22-1.5l0.21-0.72l0.35-0.56l6.31-7.38l0.39-0.77l0.25-0.54l-0.04-0.95l-0.02-0.48l-0.39-1.64
							l-0.15-1.02l0.08-0.88l0.3-0.36l0.27-0.07l1.4,0.63l1.13,0.31l0.86-0.01l1-0.24l0.8-0.29l2.63-1.88l0.89-0.31l0.91-0.22l0.61-0.24
							l0.91-0.6l0.28-0.45l0.28-0.45l0.08-0.88l-0.02-0.48l-0.46-1.91l-0.11-0.45l-0.27-0.32l-1.44-1.19l-0.27-0.32l-0.38-0.78l-0.25-0.23
							l-0.72-0.21l-0.34-0.21l-0.25-0.23l-0.65-1.1l-0.27-0.32l-0.52-0.55l-0.34-0.21l-0.75-0.3l-1.2-0.19l-1.75-0.06l-0.79-0.1
							l-1.06-0.42l-0.88-0.85l-1.23-1.53l-0.52-0.55l-0.88-0.46l3.23-0.97l0.32-0.27l0.28-0.45l0.12-0.7l0.28-0.84l1.4-1.78l0.71-0.65
							l0.78-0.38l0.86-0.01l0.75,0.3l1.12,1.08l0.34,0.21l0.65,0.32l0.72,0.21l1,0.15l1.93,0.02l0.64-0.15l4.72-2l1.66-0.3l1.41-0.15
							l1.11,0.21l0.32,0.12l1.12,1.08l1.76,0.54l0.43,0.19l1.12,1.08l0.25,0.23l5.6,2.5l0.56,0.35l2.99,2.46l0.97,0.44l0.97,0.44
							l0.48-0.02l0.32-0.27l0.21-0.72l-0.02-0.48l-0.42-1.34l0-0.39l0.09-0.41l0.23-0.25L160,55.3l0.87-0.4l0.32-0.27l0.51-0.7l0.59-0.33
							l1.16-0.37l1.25-0.01l0.82-0.2l0.45-0.11l0.89-0.7l2.3-0.84l0.66-0.45l0.23-0.25l0.32-0.65l0.19-1.2l0.26-0.93l0.44-0.59l0.43-0.2
							l0.39,0l0.92,0.64l1.71,1.51l0.36,0.3l1.15,0.4l0.48-0.02l0.43-0.2l0.46-0.49l0.51-1.08l0.37-0.47l0.55-0.52l0.48-0.02l0.39,0
							l1.88,0.61l0.32,0.12l0.54,0.64l0.31,0.89l0.01,0.86l-0.09,0.41l-1.12,3.73L180.76,56l-0.19,0.82l-0.1,0.79l0.11,0.45l0.47,0.75
							l0.83,0.67l0.52,0.55l0.4,0.87l0.49,0.46l0.84,0.28l1.15,0.78l2.08,1.04l2.29,0.7l1.31,0.65l1.45,0.42L194.73,66.5L194.73,66.5z"
          />
        </g>
        <g>
          <path
            id="Ayutthaya"
            aria-label="พระนครศรีอยุธยา"
            onClick={handleOnSelect}
            className={`${
              selected.Ayutthaya ? "fill-secondary" : "fill-gray-200"
            } hover:cursor-pointer transition ease-in-out duration-200`}
            d="M62.36,123.71l-0.6,6.3l0.3,1.66l0.27,0.32l1.4,0.63l0.54,0.64l0.8,1.35l0.7,0.51l0.52,0.16
							l0.61,0.14l0.77,0.01l0.93-0.13l1.87-0.64l0.87-0.4l0.68-0.36l2.29-1.7l0.87-0.79l0.66-0.45l0.78-0.38l0.45-0.11l1.75-0.32
							l2.16-0.61l0.84-0.11l1.43-0.05l0.61,0.14l0.34,0.21l0.22,0.52l0.27,0.71l0.28,1.95l0.01,0.86l-0.44,0.59l-0.66,0.45l-0.09,0.41
							l0.27,0.71l1.64,2.01l0.33,0.59l0.07,0.27l0.01,4.04l0.11,0.45l0.29,0.8l0.51,0.94l0.39,1.64l0.31,0.5l0.27,0.32l2.51,1.23
							l0.59,0.44l0.4,0.48l0.31,0.89l0.05,1.43l0.01,0.86l-0.34,2.58l0.06,0.66l0.27,0.32l0.43,0.19l0.36-0.09l1-0.24l0.8-0.29l0.48-0.02
							l0.41,0.09l0.75,0.3l0.38,0.39l0.29,0.41l0.52,2.57l0.71,2.14l0.63,2.64l-16.12,13.01l-0.44,0.59l-1.72,2.43l-0.95,2.06l-0.57,0.43
							l-1,0.63l-5.08,2.47l-0.45,0.11l-0.41-0.09l-0.91-0.17l-0.95-0.35l-0.48,0.02l-0.52,0.22L67,187.54l-0.52,0.22l-0.64,0.15
							l-3.52,0.56l-11.92,2.86l-1.4-1.01l-0.86-0.37l-2.81-0.09l-0.73,0.17l-0.41,0.29l-0.86,1.65l-0.37,0.86l-1.09-4.55l-0.4-0.48
							l-0.52-0.55l-2.04-0.09l-3.09,0.36l-1.25,0.01l2.02-4.81l0.27-1.7l-0.7-2.53l0.2-9.19l-0.82-6.63l-0.43-2.21l-0.45-0.66l-0.54-0.64
							l-0.83-0.67l-1.93-2.04l-0.49-1.23l-1.12-3.48l1.46-0.74l1.2-0.19l0.34-0.18l1.35-1.19l0.55-0.13l3.61-0.19l0.8-0.29l1.53-0.85
							l0.8-0.29l1.04-0.06l0.34-0.18l1.56-1.53l0.59-0.33l1.78-0.62l0.72,0.21l0.4,0.48l0.31,0.5l0.42,1.34l0.02,0.48l0.7,2.91l0.11,0.45
							l0.27,0.32l0.34,0.21l0.36-0.09l1.14-0.47l0.64-0.15l1.16,0.01l1.22,0.28l0.36-0.09l0.41-0.29l2.15-2.25l-0.19-1.98l-2.33-8.1
							l-0.29-0.8l-0.31-0.5l-0.36-0.3l-0.18-0.34l-0.11-0.45l0.19-0.82l0.3-0.75l-0.01-6.44l-0.4-3.27l-0.67-1.19l-0.1-1.61l1.4,0.63
							l1.75-0.32l0.61,0.14l0.47,0.37l0.88,0.46l0.7,0.12L62.36,123.71L62.36,123.71z"
          />
        </g>
        <g>
          <path
            id="Pattani"
            aria-label="ปัตตานี"
            onClick={handleOnSelect}
            className={`${
              selected.Pattani ? "fill-secondary" : "fill-gray-200"
            } hover:cursor-pointer transition ease-in-out duration-200`}
            d="M180.57,157.45l-0.23,0.25l-3.48,0.74l-0.57,0.04l-0.7-0.12l-1.01-1.01l-0.59-0.44l-0.38-0.78
							l-0.42-1.34l-0.25-0.23l-0.27-0.32l-0.41-0.09l-0.77-0.01l-0.39,0l-0.59-0.44l-0.41-0.09l-1.23,0.87l-1.09-0.12l-0.45,0.11
							l-1.26,0.78l-0.32,0.27l-0.73,0.17l-0.34,0.18l-0.28,0.45l-0.35,0.95l0.09,0.36l0.22,0.52l1.02,0.62l0.63,0.23l0.82,0.19l0.65,0.32
							l0.49,0.84l-0.2,2.36l-2.29,1.7l-1.12,0.56l-0.55,0.13l-0.59-0.05l-0.97-0.44l-0.54-0.25l-0.34-0.21l-1.08-1.28l-2.11-1.99
							l-0.65-0.32l-0.48,0.02l-0.55,0.13l-0.75,0.47l-1.67,1.46l-0.67,0.83l-0.55,0.52l-0.76,0.86l-0.34,0.18l-0.75,0.08l-1.16-0.01
							l-1.89,0.55l-3.53,1.71l-1.78,0.62l-1.67,1.07L139.9,170l-0.34,0.18l-0.55,0.13l-0.5-0.07l-0.79-0.48l-0.36-0.3l-1.59-1.83
							l-0.4-0.48l-0.95-0.74l-0.38-0.78l-0.11-0.84l0.08-0.88l-0.17-0.73l-0.11-0.45l-1.38-2.55l-0.31-0.89l-0.21-1.3l-0.18-0.34
							l-0.23-0.14l-0.45,0.11l-0.51,0.7l-0.25,0.54l-0.71,3.44l-0.74,1.72l-1.43,2.07l-0.99,1.1l-1.64,1.16l-1.05,0.44l-1.11,0.17
							l-0.66,0.06l-1.75-0.06l-0.66,0.06l-0.55,0.13l-0.8,0.29l-0.7-0.12l-1.04-0.33l-3.07-1.57l-2.47-0.66l-3.22-0.19l-0.72-0.21
							l-0.65-0.32l-0.45-0.66l-2.22-5.24l-2.04-2.11l-0.27-0.71l-0.24-1l-0.97-5.64l0.08-0.88l0.33-1.43l1.15-3.64l-0.21-1.3l13.35-3.69
							l3.98-3.07l0.78-2.78l3.79-0.24l1.85,0.9l2.13,0.07l0.93,0.26l0.14-0.23l3.59-0.67l-1.43-1.96l-2.23-2.06l-7.89-1.19l2.92-1.86
							l3.31-0.22l3.37,1.6l4.91,1.61l4.01,0.29l2.02,0l1.68-0.21l2.2-0.05l1.97,0.2l0.97,0.44l3.31,0.55l4.32,1.18l1.17,0.87l15.77,16.42
							L180.57,157.45L180.57,157.45z"
          />
        </g>
      </svg>
    </div>
  );
}