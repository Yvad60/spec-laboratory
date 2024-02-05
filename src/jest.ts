export const expect = (actual: any) => {
  return {
    toBe: (expected: any) => {
      if (expected !== actual) throw new Error(`Expected ${expected} but received ${actual}`);
    },
  };
};

export const test = (testTitle: string, callback: () => void) => {
  try {
    callback();
    console.log(`✅ ${testTitle}`);
  } catch (error) {
    console.error(`❌ ${testTitle}`);
    console.error(error);
  }
};
