<!--
Copyright (c) 2020 National Instruments
SPDX-License-Identifier: MIT
-->

<!-- markdownlint-capture -->
<!-- markdownlint-disable no-inline-html -->
<div align="center">
    <div>
      <a href="https://github.com/ni/VireoSDK">
        <img width="335" height="326" src="docs/vireo-logo.png" alt="Vireo logo">
      </a>
    </div>
</div>
<!-- markdownlint-restore -->

# Vireo

[![NPM Version](https://img.shields.io/npm/v/vireo.svg)](https://www.npmjs.com/package/vireo)
[![Nuget Version](https://img.shields.io/nuget/v/vireo.svg)](https://www.nuget.org/packages/vireo)
[![GitHub Actions Build Status](https://github.com/ni/VireoSDK/workflows/.github/workflows/build.yml/badge.svg)](https://github.com/ni/VireoSDK)
[![NPM Downloads](https://img.shields.io/npm/dt/vireo.svg)](https://www.npmjs.com/package/vireo)

A compact parallel execution runtime for VIs (virtual instruments) saved in VI assembly format (.via files).

The Vireo project provides a subset of LabVIEW runtime functionality for small targets. Example usages are WebVIs and the EV3 support in the _LabVIEW Module for LEGO® MINDSTORMS®_. The LabVIEW features supported are primarily defined by the features needed for the VIA files generated by [G Web Development Software](https://www.webvi.io/).

# Development

- [Workflow](docs/Workflow.md) - Getting started workflow for setting up a GitHub fork and local development environment.
- [Build](docs/Build.md) - Platform-specific instructions for building Vireo.
- [Test](docs/Test.md) - Instructions for running tests and creating new tests.
- [Coverage](docs/Coverage.md) - How to gather test coverage reports.
- [Coding Guidelines](docs/CodingGuidelines.md)- Guiding principles for Vireo development.
- [Design Notes](docs/DesignNotes.md) - Record of major design decisions.

# Learning

- [The Big Picture](docs/Intro.md) - What is Vireo and HelloWorld examples.
- [Introduction to types and functions](docs/IntroTypeExamples.md) - Basic Vireo type system examples.
- [Introduction to parallel execution](docs/IntroParallelClumpExamples.md) - Vireo parallelism primitives.
- [Introduction to arrays](docs/IntroArrayExamples.md) - Description of Vireo's different Array representations.
- [The Type Manager](docs/TypeManager.md) - Understanding the Type Manager that manages all types and data allocations.
- [VIA EBNF](docs/ViaEBNF.md) - EBNF grammar for VIA assembly.

# License and copyright

Copyright (c) 2020 National Instruments

Licensed under the [MIT License](LICENSE.txt).
