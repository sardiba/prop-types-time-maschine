import { useEffect, useState } from 'react';

/*
 *
 *    __---~~~~--__                      __--~~~~---__
 *   `\---~~~~~~~~\\                    //~~~~~~~~---/´
 *     \/~~~~~~~~~\||                  ||/~~~~~~~~~\/
 *                 `\\                //´
 *                   `\\            //´
 *                     ||          ||
 *           ______--~~~~~~~~~~~~~~~~~~--______
 *      ___ // _-~                        ~-_ \\ ___
 *     `\__)\/~                              ~\/(__/´
 *      _--`-___                            ___-´--_
 *    /~     `\ ~~~~~~~~------------~~~~~~~~ /´     ~\
 *   /|        `\                          /´        |\
 *  | `\   ______`\_         nf         _/´______   /´ |
 *  |   `\_~-_____\ ~-________________-~ /_____-~_/´   |
 *  `.     ~-__________________________________-~     .´
 *   `.      [_______/------|~~|------\_______]      .´
 *    `\--___((____)(________\/________)(____))___--/´
 *     |>>>>>>||                            ||<<<<<<|
 *     `\<<<<</´                            `\>>>>>/´
 *
 *
 * Welcome to the nitty gritty of the TimeMachine!
 * Do not worry about the function body of the component too much.
 * For now you want to help the users of this component by providing helpful
 * information about the types (string, number, etc.) of our props.
 *
 *    __🧚‍♀️_________________________________
 *   |                                    |
 *   |  If you haven't already,           |
 *   |  start this Vite app in dev mode:  |
 *   |                                    |
 *   |  $ npm run dev                     |
 *   |____________________________________|
 *
 *
 * 01 — Rename this file from `TimeMachine.jsx` to `TimeMachine.tsx`.
 *
 *      The t here stands for "type". So a `.ts` or `.tsx` extension means,
 *      that that file is a TypeScript file.
 *      A type is non-standard JavaScript: The browser does not know, what to
 *      with it. Vite removes the types before giving the code to the browser.
 *      Visual Studio Code though can read the types to give you _extremely_
 *      helpful information.
 *
 *
 * 02 — Add the following code before the component (replacing the 02 comment):
 *
 *      type TimeMachineProps = {
 *        fluxCapacitorVoltage: any;
 *        spaceTimeDomain: any;
 *        onTemporalDisplacement: any;
 *      };
 *
 *      This is a type definition. Just like you can define a const or let you can
 *      define, use, export and import types in TypeScript files.
 *
 *      This code says that `TimeMachineProps` is a type that allows an object
 *      with three properties that in itself have the type `any`.
 *      In types `any` simply means any value of any type. This basically is the
 *      default in JavaScript. You have seen this before when hovering over the
 *      props in App.tsx. It is not very helpful, because `any` allows all the
 *      values, even if they won't work or don't make sense.
 *
 *      These `any`s are what you will change in a moment.
 *
 *
 * 03 — Add `: TimeMachineProps` after the destructured props function argument
 *      of the TimeMachine component (replacing the 03 comment).
 *
 *      The colon says:
 *      "Hej, this variable or function argument has this type."
 *      Now if you hover over the component, you'll see that Visual Studio
 *      knows, that the first argument has the `TimeMachineProps` type.
 *
 *
 * 04 — You'll replace the `any`s one-by-one:
 *      Change `fluxCapacitorVoltage: any;` to `fluxCapacitorVoltage: number;`
 *
 *      Check the App.tsx. You should see a red squiggly line.
 *      Hover over the error:
 *      > Type 'string' is not assignable to type 'number'.
 *
 *      Change the prop to be actually be a number instead of a string to make
 *      the error go away in Visual Studio Code.
 *
 *      Also the error in the browser should have changed.
 *
 *      You can use all JavaScript primitive types as TypeScript types:
 *      string, number, boolean, null, undefined
 *
 * 05 — There are even more advanced types. You'll learn about two of them.
 *
 *      Update the type of `spaceTimeDomain` to `string`.
 *      There is still no error in App.tsx.
 *      But the browser still shows the same error.
 *
 *      You can narrow down the type even more. Here, you only want to allow
 *      two specific stings: 'Manova' or 'Durbin-Watson'.
 *
 *      Change the type to: `'Manova' | 'Durbin-Watson'`.
 *      The single pipe ("|") means "union type". You can read it as "or".
 *
 *      App.tsx now shows this error:
 *      > Type '"Edison-Delta"' is not assignable to type '"Manova" | "Durbin-Watson"'.
 *
 *      Fix the prop value in App.tsx to make the errors go away in Visual
 *      Studio Code and in the Browser.
 *
 *
 * 06 — One more to go:
 *
 *      Change the type of `onTemporalDisplacement` to be `Function`.
 *      The Function type allows any kind of function.
 *
 *      Fix the error in App.tsx:
 *      > Type 'void' is not assignable to type 'Function'.
 *
 *      Maybe if you just remove those brackets…
 *
 *
 * Congratz! ✨
 * You should now have a working TimeMachine that has type safe props.
 * That means, that it'll show errors in Visual Studio Code even before they'll
 * happen in the browser!
 *
 * If you're curious and want to learn more about how to use TypeScript with
 * React, check out this site:
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example
 *
 * TypeScript can do way more than just type React components so if you want to
 * know more about making any JavaScript type safe with TypeScript check out the
 * official handbook:
 * https://www.typescriptlang.org/docs/handbook/intro.html
 */

/* 02 */

/**
 * The TimeMachine Component ⏰
 *
 * If you're still reading this from App,
 * go ahead and command click now!
 *
 * If you got here by command clicking,
 * scroll up to the top to read what to do next!
 */
export const TimeMachine = (
  { fluxCapacitorVoltage, spaceTimeDomain, onTemporalDisplacement } /* 03 */,
) => {
  // You don't have to change anything below this line! 😱
  const [temporalDestination, setTemporalDestination] = useState(null);

  useEffect(() => {
    const calculateTemporalDisplacement = () => {
      if (typeof fluxCapacitorVoltage !== 'number') {
        throw new Error(
          'Flux Capacitor exploded because voltage setting was not a number.',
        );
      }
      if (
        typeof spaceTimeDomain !== 'string' ||
        !['Manova', 'Durbin-Watson'].includes(spaceTimeDomain)
      ) {
        throw new Error(
          "Passenger got lost in the space time continuum because the space time domain wasn't one of the valid values: 'Manova' or 'Durbin-Watson'",
        );
      }
      const randomDate = (start, end) => {
        return new Date(
          start.getTime() + Math.random() * (end.getTime() - start.getTime()),
        );
      };
      return randomDate(new Date(1885, 0, 1), new Date(2015, 0, 1));
    };
    setTemporalDestination(calculateTemporalDisplacement());
    if (typeof onTemporalDisplacement !== 'function') {
      throw new Error(
        'Passenger got lost while trying to execute temporal displacment function.',
      );
    }
    onTemporalDisplacement();
  }, []);

  return (
    <div style={{ margin: '2rem', fontWeight: 700 }}>
      {temporalDestination
        ? 'Reached temporal destination: ' +
          temporalDestination.toLocaleString()
        : ''}
    </div>
  );
};
