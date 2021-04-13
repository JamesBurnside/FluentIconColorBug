import React from 'react';
import { lightTheme, darkTheme } from "./themes";
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { Video20Filled } from '@fluentui/react-icons';
import { VideoSolidIcon } from '@fluentui/react-icons-old';
import { ThemeProvider } from '@fluentui/react-theme-provider';

function App() {
  return (
    <div>
      <ThemeProvider theme={lightTheme} style={{height: '25vh'}}>
        <h2>Light Mode Examples @fluentui/react-icons@1.1.118</h2>
        <NewIconWithText />
        <NewIconInPrimaryButton />
        <NewIconInDisabledButton />
      </ThemeProvider>

      <ThemeProvider theme={darkTheme} style={{height: '25vh'}}>
        <h2>Dark Mode Examples @fluentui/react-icons@1.1.118</h2>
        <NewIconWithText />
        <NewIconInPrimaryButton />
        <NewIconInDisabledButton />
      </ThemeProvider>

      <ThemeProvider theme={lightTheme} style={{height: '25vh'}}>
        <h2>Light Mode Examples @fluentui/react-icons@0.4.1</h2>
        <OldIconWithText />
        <OldIconInPrimaryButton />
        <OldIconInDisabledButton />
      </ThemeProvider>

      <ThemeProvider theme={darkTheme} style={{height: '25vh'}}>
        <h2>Dark Mode Examples @fluentui/react-icons@0.4.1</h2>
        <OldIconWithText />
        <OldIconInPrimaryButton />
        <OldIconInDisabledButton />
      </ThemeProvider>
    </div>
  );
}

// Examples using @fluentui/react-icons v.1.1.118
const NewIconWithText = (): JSX.Element => (
  <div>
    Text before icon&nbsp;
    <Video20Filled />
    &nbsp;Text after icon
  </div>
)

const NewIconInPrimaryButton = (): JSX.Element =>
  <PrimaryButton>
    <Video20Filled />
    &nbsp;Start Call
  </PrimaryButton>

const NewIconInDisabledButton = (): JSX.Element =>
  <DefaultButton disabled={true}>
    <Video20Filled />
    &nbsp;Start Call
  </DefaultButton>

// Examples using @fluentui/react-icons v.0.4.1
const OldIconWithText = (): JSX.Element => (
  <div>
    Text before icon&nbsp;
    <VideoSolidIcon />
    &nbsp;Text after icon
  </div>
)

const OldIconInPrimaryButton = (): JSX.Element =>
  <PrimaryButton>
    <VideoSolidIcon />
    &nbsp;Start Call
  </PrimaryButton>

const OldIconInDisabledButton = (): JSX.Element =>
  <DefaultButton disabled={true}>
    <VideoSolidIcon />
    &nbsp;Start Call
  </DefaultButton>

export default App;
