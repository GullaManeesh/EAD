# Star Topology in NS2

# Create a Simulator object
set ns [new Simulator]

# Open the NAM trace file
set nf [open out.nam w]
$ns namtrace-all $nf

# Define a 'finish' procedure
proc finish {} {
    global ns nf
    $ns flush-trace
    close $nf
    exec nam out.nam &
    exit 0
}

# Create 4 outer nodes + 1 central node
set center [$ns node]
for {set i 0} {$i < 4} {incr i} {
    set n($i) [$ns node]
    $ns duplex-link $center $n($i) 1Mb 10ms DropTail
}

# Create TCP and UDP connections for demonstration
set tcp [new Agent/TCP]
$ns attach-agent $n(0) $tcp
set sink [new Agent/TCPSink]
$ns attach-agent $n(3) $sink
$ns connect $tcp $sink

# Create FTP application over TCP
set ftp [new Application/FTP]
$ftp attach-agent $tcp
$ftp set type_ FTP

# Schedule events
$ns at 0.5 "$ftp start"
$ns at 4.5 "$ftp stop"
$ns at 5.0 "finish"

# Run simulation
$ns run