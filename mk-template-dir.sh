#!/bin/bash
read -p "テンプレートディレクトリのディレクトリ名を入力して下さい" dir
mkdir -m 666 -p $dir
mkdir -m 666 -p $dir/a
mkdir -m 666 -p $dir/b
mkdir -m 666 -p $dir/c
