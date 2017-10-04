# Summary of challenge:

When a message is transmitted over the internet, it is split into multiple packets, each packet is transferred individually, and the packets are reassembled into the original message by the receiver. Because the internet exists in the real world, and because the real world can be messy, packets do not always arrive in the order in which they are sent. For today's challenge, your program must collect packets from stdin, assemble them in the correct order, and print the completed messages to stdout.

The point of reading from stdin is to simulate incoming packets. For the purposes of this challenge, assume there is a potentially unlimited number of packets. Your program should not depend on knowing how many packets there are in total. Simply sorting the input in its entirety would technically work, but defeats the purpose of this exercise.
