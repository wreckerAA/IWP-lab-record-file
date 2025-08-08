#!/usr/bin/perl
use strict;
use warnings;

my @array = (1..10);
print "Initial array: @array\n";
print "Initial highest index: $#array\n";

$array[20] = 99;   # Assign beyond current array end
print "After assignment, highest index: $#array\n";

my $lastIndex = $#array;
print "Stored highest index in scalar: $lastIndex\n";
