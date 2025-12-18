# Distance Vector Routing (RIP) in NS2

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

# Enable distance vector routing (RIP)
$ns rtproto DV

# Create 5 nodes
for {set i 0} {$i < 5} {incr i} {
    set n($i) [$ns node]
}

# Connect nodes to form a topology
$ns duplex-link $n(0) $n(1) 1Mb 10ms DropTail
$ns duplex-link $n(1) $n(2) 1Mb 10ms DropTail
$ns duplex-link $n(2) $n(3) 1Mb 10ms DropTail
$ns duplex-link $n(3) $n(4) 1Mb 10ms DropTail
$ns duplex-link $n(0) $n(4) 1Mb 20ms DropTail

# Set queue limits
$ns queue-limit $n(0) $n(1) 10
$ns queue-limit $n(1) $n(2) 10
$ns queue-limit $n(2) $n(3) 10
$ns queue-limit $n(3) $n(4) 10
$ns queue-limit $n(0) $n(4) 10

# Create UDP agent and attach to source node
set udp [new Agent/UDP]
$ns attach-agent $n(0) $udp

# Create Null agent and attach to destination node
set null [new Agent/Null]
$ns attach-agent $n(4) $null

# Connect agents
$ns connect $udp $null

# Create CBR application over UDP
set cbr [new Application/Traffic/CBR]
$cbr set packetSize_ 512
$cbr set interval_ 0.5
$cbr attach-agent $udp

# Schedule events
$ns at 1.0 "$cbr start"
$ns at 4.0 "$cbr stop"
$ns at 5.0 "finish"

# Run simulation
$ns run