import React from 'react';
import styled from '@emotion/styled';
import { SparkleInstance } from './SparkleInstance';

import { range } from 'lodash';

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

// Default color is a bright yellow
const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

const useRandomInterval = (callback: any, minDelay: number, maxDelay: number) => {
  const timeoutId = React.useRef(null);
  const savedCallback = React.useRef(callback);
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    const isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number';
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay);
        // @ts-expect-error
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current();
          handleTick();
        }, nextTickAt);
      };

      handleTick();
    }

    return () => window.clearTimeout(timeoutId.current!);
  }, [minDelay, maxDelay]);
  const cancel = React.useCallback(() => {
    window.clearTimeout(timeoutId.current!);
  }, []);
  return cancel;
};

type Sparkle = {
  id: string
  createdAt: number,
  // Bright yellow color:
  color: string,
  size: number
  style: {
    // Pick a random spot in the available space
    top: string
    left: string
    // Float sparkles above sibling content
    zIndex: number
  }
};

const generateSparkle = (color: string): Sparkle => {
  return {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    // Bright yellow color:
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: `${random(0, 100)}%`,
      left: `${random(0, 100)}%`,
      // Float sparkles above sibling content
      zIndex: 2,
    },
  };
};

export const Sparkles = ({ color = DEFAULT_COLOR, children }: { color?: string, children: React.ReactChild }) => {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>(() => {
    return range(3).map(() => generateSparkle(color));
  });

  useRandomInterval(() => {
    const now = Date.now();
    // Create a new sparkle
    const sparkle = generateSparkle(color);
    // Clean up any "expired" sparkles
    const nextSparkles = sparkles.filter(sparkle => {
      const delta = now - sparkle.createdAt;
      return delta < 1000;
    });
    // Include our new sparkle
    nextSparkles.push(sparkle);
    // Make it so!
    setSparkles(nextSparkles);
  }, 50, 500);

  return (
    <Wrapper>
      {sparkles.map(sparkle => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>
        {children}
      </ChildWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;
