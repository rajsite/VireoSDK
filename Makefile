# Copyright (c) 2020 National Instruments
# SPDX-License-Identifier: MIT

.PHONY: native js testjs testnative

all: native js

native:	simple

lint:
	@cd make-it/cpplint && make $@

simple v32 v64 help:
	cd make-it && make $@

vjs js:
	cd make-it && make vjs

vwasi:
	cd make-it && make vwasi TARGET=wasm32-wasip2

install-wasi-sdk-linux:
	cd make-it && make install-wasi-sdk-linux

install-wasi-sdk-windows:
	cd make-it && make install-wasi-sdk-windows

install-wasi-sdk-mac:
	cd make-it && make install-wasi-sdk-mac

unittest:
	cd make-it && make $@

test: testnative testjs testwasi

testhttpbin:
	cd test-it && node test.js -j -t httpbin --dots

testjs:
	cd test-it && node test.js -j --dots

testnative:
	cd test-it && node test.js -n --dots

testwasi:
	cd test-it && node test.js --wasi --once --dots -t wasi

clean:
	cd make-it && make clean && make -f EmMakefile clean
