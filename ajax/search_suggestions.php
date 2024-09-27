<?php
$teamMembers = [
    ['name' => 'Allen Jefferson C. Orcino'],
    ['name' => 'Jhonrey Kyle C. Lugon'],
    ['name' => 'Hannah Grace Traya'],
    ['name' => 'Ian Adrian Porciuncula'],
    ['name' => 'Lester Plandaño'],
];

// Get the query string
$query = isset($_GET['query']) ? strtolower($_GET['query']) : '';

// Filter team members based on query
$suggestions = [];
foreach ($teamMembers as $member) {
    if (stripos($member['name'], $query) !== false) {
        $suggestions[] = $member['name'];
    }
}

// Return suggestions as a list of clickable items
if (!empty($suggestions)) {
    foreach ($suggestions as $suggestion) {
        echo '<div class="suggestion-item" onclick="selectSuggestion(\'' . htmlspecialchars($suggestion) . '\')">' . htmlspecialchars($suggestion) . '</div>';
    }
} else {
    echo '<div class="suggestion-item">No results found</div>';
}
?>
