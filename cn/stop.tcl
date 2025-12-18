# Stop and Wait Protocol in NS2

# Create a Simulator
set ns [new Simulator]

# Open NAM trace file
set nf [open out.nam w]
$ns namtrace-all $nf

# Define finish procedure
proc finish {} {
    global ns nf
    $ns flush-trace
    close $nf
    exec nam out.nam &
    exit 0
}

# Create two nodes: sender and receiver
set sender [$ns node]
set receiver [$ns node]

# Connect nodes with a duplex link
$ns duplex-link $sender $receiver 1Mb 10ms DropTail

# Setup colors for visualization
$ns color 1 Blue
$ns color 2 Red

# Create agents
set tcp [new Agent/TCP]
$tcp set class_ 1
$ns attach-agent $sender $tcp

set sink [new Agent/TCPSink]
$ns attach-agent $receiver $sink
$ns connect $tcp $sink

# Set TCP parameters to simulate Stop and Wait
$tcp set window_ 1        ;# Only one packet in transit
$tcp set packetSize_ 512  ;# Packet size

# Create an FTP application over TCP
set ftp [new Application/FTP]
$ftp attach-agent $tcp
$ftp set type_ FTP

# Schedule events
$ns at 0.5 "$ftp start"
$ns at 4.5 "$ftp stop"
$ns at 5.0 "finish"

# Run simulation
$ns run