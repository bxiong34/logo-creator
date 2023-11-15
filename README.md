# 10 Object-oriented Programming: SVG Logo Maker

## Description

This challenge is to create a generator that can create a logo based on a user's inputs.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

<!-- The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png) -->

## Usage

When a user answer all the prompts, a logo will be generated based on the user's inputs.

<!-- ![Alt text](<assets/Screenshot 2023-11-08 at 6.28.48 PM.png>)

<video src="assets/Challenge9.mp4" controls title="Title"></video>
https://drive.google.com/file/d/1pkywj9NzFI6bTpHEsLS-cqT1sVpq-yyN/view?usp=sharing
--- -->

## Tests
Type "npm test" in the command line to run a test that renders an expected outcome of each shape class (Circle, Triangle, Square).

© 2023 Bao Xiong. All Rights Reserved.
